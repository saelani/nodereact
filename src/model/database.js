var Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'node',
  'root',
  'M4nislor',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

module.exports = sequelize;