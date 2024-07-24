# Stage 1: Build the application
FROM node:20

# # Set the working directory
WORKDIR /frontend

# Copy the package.json and package-lock.json files
COPY package.json .

COPY . .

# Install dependencies
RUN npm install
CMD [ "npm", "run", "dev", "--", "-p", "5252"]