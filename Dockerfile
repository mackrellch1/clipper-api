FROM node:16-slim
WORKDIR /usr/src/discord-clips
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install
COPY . ./
RUN npm run tsc
ENV DEV=false
CMD [ "npm", "start" ]