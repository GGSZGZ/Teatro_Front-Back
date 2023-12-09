# Etapa 1: Utilizar una imagen base que incluya Node.js y npm
FROM node:14 AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos de configuración e instalación de dependencias
COPY package*.json ./
RUN npm install

# Copiar la aplicación desde la raíz (donde está el Dockerfile)
COPY . .

# Etapa 2: Utilizar una imagen base de Nginx
FROM nginx:latest

# Copiar los archivos construidos desde la etapa anterior
COPY --from=build /app /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Copiar la configuración de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
