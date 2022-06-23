FROM node:14.19.1-alpine3.14

WORKDIR /app

COPY ./package.json .

COPY . .

RUN yarn

EXPOSE 5000

CMD yarn server
