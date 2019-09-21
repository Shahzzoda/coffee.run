'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    product: DataTypes.STRING,
    details: DataTypes.STRING,
    store: DataTypes.STRING,
    total: DataTypes.DECIMAL,
    delivery_location: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    person_ordering: DataTypes.STRING,
    runner: DataTypes.STRING
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};