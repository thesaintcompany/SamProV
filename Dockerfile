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

# Stage 2: Production Server with both Nginx and Node.js backend
FROM node:22-alpine

# Install Nginx and Postfix (for sendmail)
RUN apk add --no-cache nginx postfix && \
    postfix postconf inet_protocols=ipv4 && \
    postfix postconf myhostname=sampro.local && \
    postfix postconf mydestination= && \
    postfix postconf smtpd_recipient_restrictions=permit_mynetworks,reject

WORKDIR /app

# Copy backend files
COPY package*.json server.js ./
RUN npm ci --production

# Copy compiled frontend files from builder stage
COPY --from=builder /app/dist ./dist

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Create startup script
RUN echo '#!/bin/sh\n\
# Start Postfix\n\
postfix start\n\
# Start Nginx\n\
nginx -g "daemon off;" &\n\
# Start Node API\n\
node server.js\n' > /app/start.sh && chmod +x /app/start.sh

# Expose port 3043 as requested for Coolify
EXPOSE 3043

# Start both services
CMD ["/app/start.sh"]
