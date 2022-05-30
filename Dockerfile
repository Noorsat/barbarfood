FROM node
ENV NODE_ENV development
WORKDIR /app
COPY package.json .
COPY npm.lock .
RUN npm install
COPY . . 
EXPOSE 3000
CMD ["npm", "start"] 