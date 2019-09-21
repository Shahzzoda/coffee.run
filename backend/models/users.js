'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    school: DataTypes.STRING,
    phone: DataTypes.STRING,
    balance: DataTypes.DECIMAL,
    rating: DataTypes.DECIMAL
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
  };
  return Users;
};