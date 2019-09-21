'use strict';
module.exports = (sequelize, DataTypes) => {
  const Store = sequelize.define('Store', {
    name: DataTypes.STRING,
    location: DataTypes.STRING
  }, {});
  Store.associate = function(models) {
    // associations can be defined here
  };
  return Store;
};