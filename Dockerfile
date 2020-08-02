# FROM node
# COPY ./ /usr/local/app
# WORKDIR /usr/local/app
# RUN npm config set registry=https://registry.npm.taobao.org && npm install
# # ENV NODE_ENV dev
# EXPOSE 8080

FROM node
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm config set registry=https://registry.npm.taobao.org && npm install
COPY . /usr/src/app
CMD [ "npm","start" ]
EXPOSE 8080