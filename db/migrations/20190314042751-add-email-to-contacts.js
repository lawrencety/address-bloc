'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Contacts','email', {
      type:Sequelize.String
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Contacts','email')
  }
};
