# Stage 1: Build the Vite + React TypeScript Application
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files first for optimal Docker layer caching
COPY package*.json ./
RUN npm ci

# Copy project source files (excluding .dockerignore)
COPY . .

# Build production bundle
RUN npm run build

# Stage 2: Production Nginx + PHP Server
FROM nginx:alpine

# Install PHP and Postfix
RUN apk add --no-cache \
    php81 \
    php81-fpm \
    php81-ctype \
    postfix \
    supervisor

# Configure Postfix for local mail
RUN postfix postconf inet_protocols=ipv4 && \
    postfix postconf myhostname=sampro.local && \
    postfix postconf mydestination= && \
    postfix postconf smtpd_recipient_restrictions=permit_mynetworks,reject

# Configure PHP-FPM
RUN sed -i 's/user = nobody/user = nginx/g' /etc/php81/php-fpm.d/www.conf && \
    sed -i 's/group = nobody/group = nginx/g' /etc/php81/php-fpm.d/www.conf && \
    sed -i 's/127.0.0.1:9000/127.0.0.1:9000/g' /etc/php81/php-fpm.d/www.conf

# Create PHP directory for assets
RUN mkdir -p /usr/share/nginx/html/assets

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Add PHP-FPM configuration to nginx
RUN echo 'location ~ \.php$ {' >> /etc/nginx/conf.d/default.conf && \
    echo '    try_files $uri =404;' >> /etc/nginx/conf.d/default.conf && \
    echo '    fastcgi_split_path_info ^(.+\.php)(/.+)$;' >> /etc/nginx/conf.d/default.conf && \
    echo '    fastcgi_pass 127.0.0.1:9000;' >> /etc/nginx/conf.d/default.conf && \
    echo '    fastcgi_index index.php;' >> /etc/nginx/conf.d/default.conf && \
    echo '    fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;' >> /etc/nginx/conf.d/default.conf && \
    echo '    include fastcgi_params;' >> /etc/nginx/conf.d/default.conf && \
    echo '}' >> /etc/nginx/conf.d/default.conf

# Copy compiled files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy PHP files
COPY --from=builder /app/public/assets /usr/share/nginx/html/assets

# Create supervisor configuration
RUN mkdir -p /var/log/supervisor
RUN echo '[supervisord]' > /etc/supervisor/conf.d/supervisord.conf && \
    echo 'nodaemon=true' >> /etc/supervisor/conf.d/supervisord.conf && \
    echo 'user=root' >> /etc/supervisor/conf.d/supervisord.conf && \
    echo '' >> /etc/supervisor/conf.d/supervisord.conf && \
    echo '[program:php-fpm]' >> /etc/supervisor/conf.d/supervisord.conf && \
    echo 'command=php-fpm81 -F' >> /etc/supervisor/conf.d/supervisord.conf && \
    echo 'autostart=true' >> /etc/supervisor/conf.d/supervisord.conf && \
    echo 'autorestart=true' >> /etc/supervisor/conf.d/supervisord.conf && \
    echo '' >> /etc/supervisor/conf.d/supervisord.conf && \
    echo '[program:postfix]' >> /etc/supervisor/conf.d/supervisord.conf && \
    echo 'command=postfix start-fg' >> /etc/supervisor/conf.d/supervisord.conf && \
    echo 'autostart=true' >> /etc/supervisor/conf.d/supervisord.conf && \
    echo 'autorestart=true' >> /etc/supervisor/conf.d/supervisord.conf && \
    echo '' >> /etc/supervisor/conf.d/supervisord.conf && \
    echo '[program:nginx]' >> /etc/supervisor/conf.d/supervisord.conf && \
    echo 'command=nginx -g "daemon off;"' >> /etc/supervisor/conf.d/supervisord.conf && \
    echo 'autostart=true' >> /etc/supervisor/conf.d/supervisord.conf && \
    echo 'autorestart=true' >> /etc/supervisor/conf.d/supervisord.conf

# Expose port 3043 as requested for Coolify
EXPOSE 3043

# Start supervisor to manage all services
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
