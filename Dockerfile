FROM node:8.4.0-slim

WORKDIR /app

COPY . /app
RUN yarn install

CMD [ "npm", "start" ]

