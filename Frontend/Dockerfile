# Stage 1: build Angular app
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build -- --output-path dist/app

# Stage 2: serve with nginx
FROM nginx:1.27-alpine
COPY --from=build /app/dist/app/browser/ /usr/share/nginx/html
# Single-page app fallback for Angular routing
RUN sed -i 's@try_files .*;@try_files $uri $uri/ /index.html;@' /etc/nginx/conf.d/default.conf \
  && sed -i 's/listen       80;/listen       8080;/' /etc/nginx/conf.d/default.conf \
  && sed -i 's/listen  \\[::\\]:80;/listen  [::]:8080;/' /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
