FROM node:12

WORKDIR /app

COPY . /app

RUN npm install node-fetch

CMD ["node", "generate-summary.js"]
