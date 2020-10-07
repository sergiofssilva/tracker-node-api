FROM node:12-alpine
WORKDIR /usr/src/tracker-node-api
COPY ./package.json .
RUN npm install --only=prod