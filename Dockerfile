FROM debian:buster-slim

RUN apt-get update && \
    apt-get install -y nodejs npm

COPY . /app

WORKDIR /app

RUN npm install && \
    npm install node-fetch@2

CMD ["node", "generate-summary.js"]
