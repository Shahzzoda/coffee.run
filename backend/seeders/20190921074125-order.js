'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Orders', [{
      product: 'Iced Coffee',
      details: 'No sugar',
      store: 'Starbucks',
      total: 6.0,
      delivery_location: 'Brooklyn College',
      quantity: 1,
      person_ordering: 'John Doe',
      runner: 'Steve Jobs',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Orders', null, {});
  }
};