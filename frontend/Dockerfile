FROM node:20

WORKDIR /app

# Dependências
COPY package.json ./
RUN npm install

COPY . .

# Run
CMD ["npm", "start"]
