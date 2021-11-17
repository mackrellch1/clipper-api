FROM node:16-slim
WORKDIR /usr/src/discord-clips
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run tsc
ENV DEV=false
CMD [ "npm", "start" ]