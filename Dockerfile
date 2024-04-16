FROM node

WORKDIR /app

COPY package.json /app

RUN yarn install

ENV PORT 3000

EXPOSE $PORT

VOLUME ["/app/data"]

RUN yarn build