'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Stores', [{
      name: 'Batata Cafe',
      location: 'Stony Brook',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Kung Fu Tea',
      location: 'Stony Brook Train Station',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Stores', null, {});
  }
};