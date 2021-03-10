FROM node:10.16.3

RUN mkdir -p /bot

WORKDIR /bot

COPY . .

RUN npm install

CMD ["npm", "start"]
