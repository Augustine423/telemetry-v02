version: '3.8'
services:
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    image: aioceaneye/frontend:latest
    ports:
      - "80:80"
  backend:
    build:
      context: ./Backend
      dockerfile: Dockerfile
    image: aioceaneye/backend:latest
    ports:
      - "8080:8080"