'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      first_name: { allowNull: false, type: Sequelize.STRING },
      last_name: { allowNull: false, type: Sequelize.STRING },
      age: { allowNull: false, type: Sequelize.INTEGER },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Users');
  },
};
