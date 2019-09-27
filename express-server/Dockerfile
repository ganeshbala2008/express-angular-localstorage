FROM node:12-alpine
LABEL Author Ganesh Balajii <ganeshbala2008@gmail.com>

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /tmp/

RUN cd /tmp && npm install

EXPOSE 3000

CMD cp -pr /tmp/node_modules /usr/src/app && cd /usr/src/app && npm run dev

