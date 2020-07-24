FROM node

RUN mkdir -p /home/node/dad/node_modules && chown -R node:node /home/node/dad

WORKDIR /home/node/dad

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 8080

CMD ["node", "src/bot.js"]
