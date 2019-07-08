FROM node:8.15.1

RUN npm install --save \
  express@4.16.4 \
  pug@2.0.3 \
  mongodb@3.2.6 \
  express-basic-auth@1.2.0
  
COPY app /app
WORKDIR /app
CMD node app.js