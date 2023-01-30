FROM node:latest

WORKDIR /usr/src/app

COPY ["package.json", "yarn.lock", "/usr/src/app/"]

COPY --chown=node:node . /usr/src/app
RUN yarn install

USER node
