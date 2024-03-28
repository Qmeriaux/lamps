# Use Node.js base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Expose port 4200 for Angular development server
EXPOSE 4200

# Command to start Angular development server
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0", "--port", "4200"]
