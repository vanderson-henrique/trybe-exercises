'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable("Authors", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      first_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      middle_name: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      last_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      birthday: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      nationality : {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: 'brasileiro'
      },
    }),

  down: async (queryInterface, Sequelize) => queryInterface.dropTable("Authors")
};
