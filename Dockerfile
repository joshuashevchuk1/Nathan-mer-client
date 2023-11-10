FROM node:16 AS build

WORKDIR /data

COPY package.json package-lock.json ./
COPY . .

EXPOSE 3000
CMD ["npm","start"]