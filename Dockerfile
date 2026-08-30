FROM node:20

WORKDIR /app

COPY package*.json ./
 
# RUN npm install
RUN npm ci

COPY . .

CMD ["npm", "run", "dev"]