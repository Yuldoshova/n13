FROM node:18-alpine
WORKDIR /usr/local/app
COPY . .
RUN cd backend && npm install -f
EXPOSE 3000
CMD [ "node", "backend/dist/main.js" ]