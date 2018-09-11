FROM node:8
RUN mkdir /app
WORKDIR /app
RUN npm install -g http-server
ADD package*.json /app/
RUN npm install
ADD . /app/
RUN npm run build
