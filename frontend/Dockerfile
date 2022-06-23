# Create image based on the official Node image from dockerhub
FROM node:14.19.1-alpine3.14

# Create app directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY ./package.json .

COPY . .

# Install dependecies
RUN yarn


# Expose the port the app runs in
EXPOSE 3000

# Serve the app
CMD ["yarn", "start"]