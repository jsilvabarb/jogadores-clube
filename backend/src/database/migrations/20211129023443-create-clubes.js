/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('clubes', 
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false,
      },
      nome_clube: {
        type: Sequelize.STRING,
      },
      descricao_clube: {
        type: Sequelize.STRING,
      },
      imagem_clube: {
        type: Sequelize.STRING,
      },
      cor_clube_um: {
        type: Sequelize.STRING,
      },
      cor_clube_dois: {
        type: Sequelize.STRING,
      }
    });
  },

   // eslint-disable-next-line no-unused-vars
   down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('clubes');
  }
};
