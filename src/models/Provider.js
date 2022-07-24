const Sequelize = require('sequelize');
const databaseInstance = require('../database/database');

const providerColumns = {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cellphone: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  category: {
    type: Sequelize.ENUM('Toys', 'Clothes'),
    allowNull: true,
  },

};

const providerOptions = {
  freezeTableName: true,
  tableName: 'providers',
  timestamps: true,
};

module.exports = databaseInstance.define(
  'providers',
  providerColumns,
  providerOptions,
);
