'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stores = sequelize.define('Stores', {
    name: DataTypes.STRING,
    location: DataTypes.STRING
  }, {});
  Stores.associate = function(models) {
    // associations can be defined here
  };
  return Stores;
};