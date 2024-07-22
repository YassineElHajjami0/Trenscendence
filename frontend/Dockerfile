# Stage 1: Build the application
FROM node:20

# RUN apk --update add postgresql-client

# # Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json .

# Install dependencies

RUN npm install
COPY . .

CMD [ "npm", "run", "dev"]
# ENTRYPOINT ["tail", "-f"]