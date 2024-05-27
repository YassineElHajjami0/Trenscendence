# Stage 1: Build the application
FROM node:18-alpine

RUN apk --update add postgresql-client

# # Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies

RUN npm install

# RUN npm update
# RUN npm audit fix --force

# Copy the rest of the application files
COPY . .

# Insert into tables some data [items ]
ENTRYPOINT [ "sh", "init.sh" ]