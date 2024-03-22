# Use the official Node.js LTS image as the base image
FROM node:lts AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Install dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the Angular project
RUN ng build --prod

# Stage 2: Serve the Angular app using a simple HTTP server
FROM node:lts-alpine

# Set the working directory
WORKDIR /app

# Copy the built Angular app from the previous stage
COPY --from=build /app/dist .

# Install http-server to serve the Angular app
RUN npm install -g http-server

# Expose port 8080
EXPOSE 8080

# Command to start the HTTP server
CMD ["http-server", "-p", "9898"]
