# https://docs.docker.com/build/building/multi-platform/#getting-started
# BUILDX
# docker buildx create --name mybuilder --driver docker-container --bootstrap
# mybuilder

# docker image tag prueba joancema/prueba:1.0.0 
# docker build --tag joancema/prueba:1.0.0 .
# docker push joancema/prueba:1.0.0
# docker container run joancema/prueba:1.0.0 

# docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7 \
#    -t klerith/cron-ticker:latest --push .

# /app /usr /lib
# FROM --platform=linux/amd64 node:19.2-alpine3.16
# FROM --platform=$BUILDPLATFORM node:19.2-alpine3.16
FROM node:19.2-alpine3.16

# cd app
WORKDIR  /app

# Dest /app
COPY package.json ./

# Instalar las dependencias
RUN npm install

# Dest /app
COPY . .

# Realizar testing
RUN npm run test

# Eliminar archivos y directorios no necesarios en PROD
RUN rm -rf tests && rm -rf node_modules

# Unicamente las dependencias de prod
RUN npm install --prod


# Comando run de la imagen
CMD [ "node", "app.js" ]

