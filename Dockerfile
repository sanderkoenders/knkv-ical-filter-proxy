FROM node:alpine

# Set the working directory
WORKDIR /usr/src/app

# Expose default port 8080
EXPOSE 8080

# Copy the package.json & package-lock.json and install the dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN apk update && apk upgrade &&\
    rm -rf /var/cache/apk/* &&\
    npm i

# Copy the application and build the webpack bundle
COPY . ./

# Run the application
CMD [ "node", "./src/index.js" ]
