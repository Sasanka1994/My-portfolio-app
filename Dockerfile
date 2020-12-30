FROM node:alpine as BUILD
WORKDIR '/app'
COPY package*.json ./
RUN npm install
COPY . .
CMD npm run build

FROM nginx
COPY --from=BUILD /app/www /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

# ## Build
# FROM beevelop/ionic AS ionic
# # Create app directory
# WORKDIR /usr/src/app
# # Install app dependencies
# # A wildcard is used to ensure both package.json AND package-lock.json are copied
# # where available (npm@5+)
# COPY package*.json ./
# RUN npm ci
# # Bundle app source
# COPY . .
# RUN ionic build

# ## Run 
# FROM nginx:alpine
# EXPOSE 80
# #COPY www /usr/share/nginx/html
# COPY --from=ionic  /usr/src/app/www /usr/share/nginx/html
