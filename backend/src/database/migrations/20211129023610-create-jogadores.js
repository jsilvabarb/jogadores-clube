/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('jogadores', 
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false,
      },
      id_clube: {
         type: Sequelize.INTEGER,
          references: { model: 'clubes', key: 'id'},
          allowNull:false,
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
      },
      id_posicao: {
        type: Sequelize.INTEGER,
         references: { model: 'posicoes', key: 'id'},
         allowNull:false,
         onUpdate: 'CASCADE',
         onDelete: 'CASCADE',
     },
      nome_jogador: {
        type: Sequelize.STRING,
      },
      descricao_jogador: {
        type: Sequelize.STRING,
      },
      imagem_jogador: {
        type: Sequelize.STRING,
      },
    });
  },

   // eslint-disable-next-line no-unused-vars
   down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('jogadores');
  }
};
