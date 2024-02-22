module.exports = {
    development: {
        username: process.env.PRODNAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        host: process.env.PRODHOST,
        dialect: 'mysql',
        port: process.env.PORT,
    },
    test: {
        username: process.env.PRODNAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        host: process.env.PRODHOST,
        dialect: 'mysql',
        port: process.env.PORT,
    },
    production: {
        username: process.env.PRODNAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        host: process.env.PRODHOST,
        dialect: 'mysql',
        port: process.env.PORT,
    },
};
