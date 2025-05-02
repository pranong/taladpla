# FROM node:18
# WORKDIR /app
# COPY . .
# RUN npm install
# EXPOSE 3000
# CMD ["npm", "run", "prod"]

# Use the official Node.js image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to install dependencies
COPY package*.json ./

# Install dependencies (including PM2)
RUN npm install
RUN npm install pm2 -g

# Copy the rest of the application files into the container
COPY . .

# Expose the application port (make sure this matches your app's port)
EXPOSE 3000

# Start the app using PM2 in production mode
CMD ["pm2-runtime", "index.js", "--name", "backend-pm2", "--env", "production"]

