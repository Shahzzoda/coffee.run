'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName: 'Cena',
      email: 'johndoe@email.com',
      password: 'password',
      school: 'Brooklyn College',
      phone: '9171234567',
      balance: 20.0,
      rating: 5.0,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};