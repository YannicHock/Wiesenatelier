# Stage 1: Build
FROM node:20-slim AS build

WORKDIR /app

# Abhängigkeiten kopieren
COPY package*.json ./

# Abhängigkeiten installieren
RUN npm install

# Quellcode kopieren
COPY . .

# App bauen
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:stable-alpine

# Kopiere gebaute Dateien aus Stage 1
COPY --from=build /app/dist /usr/share/nginx/html

# Exponiere Port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
