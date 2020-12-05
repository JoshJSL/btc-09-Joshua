FROM node:lts-alpine
COPY ./* /usr/src/app
RUN npm install
EXPOSE 3000
CMD ["node", "index.js"]
