'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Store_menu', [{
      item: 'Cappuccino',
      price: '5.50',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      item: 'Vanilla Latte',
      price: '3.99',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Store_menu', null, {});
  }
};