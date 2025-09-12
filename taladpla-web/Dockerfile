# # Build Angular app
# FROM node:18 AS build
# WORKDIR /app
# COPY . .
# RUN npm install -g @angular/cli
# RUN npm install
# EXPOSE 4200
# CMD ["npm", "run", "start-docker"]

# # Serve with nginx
# # FROM nginx:alpine
# # COPY --from=build /dist/tanglak-web /usr/share/nginx/html

# Build Angular app
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
# RUN npm run build --prod

# Serve the built Angular app using nginx
FROM nginx:alpine
COPY --from=build /app/dist/taladpla-web /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]