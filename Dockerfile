FROM node:15.13-alpine
WORKDIR /react-companies
COPY . .
RUN npm run build