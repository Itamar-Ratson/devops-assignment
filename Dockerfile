FROM node:20-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY src src
ENTRYPOINT ["node", "src/server.js"]
