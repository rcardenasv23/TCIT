# Partimos de una imagen de node.js
FROM node:latest as builder

# Crear directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el archivo package.json a la imagen
COPY package.json .

# Instalar las dependencias de la aplicación
RUN yarn install

# Copiar el resto de la aplicación a la imagen
COPY . .

# Compilar la aplicación
RUN yarn run build 

# Crear una nueva imagen que contenga sólo los archivos de la aplicación compilada
FROM nginx:alpine
COPY --from=builder /app/dist/tcit /usr/share/nginx/html

# Exponer el puerto 3000
EXPOSE 3000

# Arrancar el servidor de nginx
CMD ["nginx", "-g", "daemon off;"]