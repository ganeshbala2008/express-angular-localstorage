# Create image based on the official Node 12 image from dockerhub
FROM node:12

# Create a directory where our app will be placed
RUN mkdir opt/code

# Change directory so that our commands run inside this new directory
WORKDIR opt/code

# Copy dependency definitions
COPY package.json /tmp/

# Install dependecies
RUN cd /tmp && npm install

# Get all the code needed to run the app
#COPY . opt/code

# Expose the port the app runs in
EXPOSE 4200

# Serve the app
CMD cp -pr /tmp/node_modules /opt/code && cd /opt/code && ./node_modules/.bin/ng serve --host 0.0.0.0
