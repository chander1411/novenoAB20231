FROM node

WORKDIR /aplicacion

COPY package.json .

RUN npm install

COPY . .

EXPOSE 80

ENV USER=value
ENV PASSWORD=value

CMD [ "npm", "start" ]