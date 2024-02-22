require('dotenv').config();

module.exports = {
  
    "development": {
      "username": "process.env.USER",
      "password": "process.env.PASSWORD",
      "database": "process.env.DATABASE",
      "host": "process.env.HOST",
      "dialect": "mysql",
      "port": "process.env.PORT"
    },
    "test": {
      "username": "process.env.USER",
      "password": "process.env.PASSWORD",
      "database": "process.env.DATABASE",
      "host": "127.0.0.1",
      "dialect": "mysql",
      "port": "process.env.PORT"
    },
    
    "production": {
      "username": "process.env.PRODUSER", // .env에 적힌 파일 명에 따라 바꿔줌
      "password": "process.env.PASSWORD",
      "database": "process.env.DATABASE",
      "host": "127.0.0.1",
      "dialect": "mysql",
      "port": "process.env.PORT"
    
    }
  }
  



