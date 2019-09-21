'use strict';
module.exports = (sequelize, DataTypes) => {
  const Store_menu = sequelize.define('Store_menu', {
    item: DataTypes.STRING,
    price: DataTypes.DECIMAL
  }, {});
  Store_menu.associate = function(models) {
    // associations can be defined here
  };
  return Store_menu;
};