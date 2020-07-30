FROM node
COPY ./ /usr/local/app
WORKDIR /usr/local/app
RUN npm config set registry=https://registry.npm.taobao.org && npm install
# ENV NODE_ENV dev
EXPOSE 8000