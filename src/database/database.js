const Sequelize = require('sequelize');
const config = require('config');

const dbInstance = new Sequelize(
  config.get('mysql.databaseName'),
  config.get('mysql.databaseUser'),
  config.get('mysql.databasePass'),
  {
    host: config.get('mysql.databaseHost'),
    dialect: 'mysql',
  },
);

module.exports = dbInstance;
