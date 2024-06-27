# Stage 1: Build the Node.js application
FROM node:alpine AS app

WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the built application with Nginx
FROM nginx:alpine

# Copy nginx.conf from the app stage to the container's Nginx configuration directory
COPY --from=app /usr/src/app/config/nginx.conf /etc/nginx/conf.d/default.conf

# Copy built files from the app stage to the Nginx HTML directory
COPY --from=app /usr/src/app/dist/angular-docker/browser /usr/share/nginx/html

# Expose port 80
EXPOSE 80
