# base image

FROM node:20-alpine

# Working directory

WORKDIR /app

# Copy the file

COPY . .

# run the app

CMD ["node", "main.jsx"]