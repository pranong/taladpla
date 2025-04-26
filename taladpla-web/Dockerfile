# Build Angular app
FROM node:18 AS build
WORKDIR /app
COPY . .
RUN npm install -g @angular/cli
RUN npm install
EXPOSE 4200
CMD ["npm", "run", "start-docker"]

# Serve with nginx
# FROM nginx:alpine
# COPY --from=build /dist/tanglak-web /usr/share/nginx/html
