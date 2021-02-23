module.exports = {
  api: {
    port: process.env.API_PORT || 3000,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'notasecret',
  },
  mysql: {
    host: process.env.MYSQL_HOST || 'remotemysql.com',
    user: process.env.MYSQL_USER || 'tOTAzs4dml',
    password: process.env.MYSQL_PASS || 'dW33j6Y52k',
    database: process.env.MYSQL_DB || 'tOTAzs4dml',
  },
};
