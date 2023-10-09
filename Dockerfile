FROM node:latest

WORKDIR /opt/app
COPY package.json package.json
COPY package-lock.json package-lock.json

RUN yarn
