# Utilizar una imagen base que incluya Node.js y npm
FROM node:14

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos de configuración e instalación de dependencias
COPY package*.json ./
RUN npm install

# Copiar la aplicación
COPY . /app

# Exponer el puerto 3000 (o el puerto que uses en tu aplicación Node.js)
EXPOSE 3000

# Comando para iniciar el servidor Node.js
CMD ["node", "/app/API-compra.js"]
