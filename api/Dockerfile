FROM node:10

WORKDIR /src/app

COPY package.json package-lock.json ./
RUN npm install
COPY . .

ENV PORT 3001
EXPOSE $PORT

CMD ["npm", "run", "start"]
