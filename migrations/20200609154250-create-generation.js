'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Generations', {
      id: {
        primaryKey: true,
        type: Sequelize.STRING(50),
      },
      title: {
        type: Sequelize.STRING(20)
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Generations');
  }
};