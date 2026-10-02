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

# Stage 2: Production Nginx Server
FROM nginx:alpine

# Replace default configuration with custom port 3043 config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 3043 as requested for Coolify
EXPOSE 3043

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
