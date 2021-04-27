'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Addresses', {
      address_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      city: { allowNull: false, type: Sequelize.STRING },
      street: { allowNull: false, type: Sequelize.STRING },
      number: { allowNull: false, type: Sequelize.INTEGER },
      employee_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: { model: 'Employees', key: 'employee_id' },
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Addresses');
  }
};
