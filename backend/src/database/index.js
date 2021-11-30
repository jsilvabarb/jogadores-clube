const Sequelize = require('sequelize');

const dbConfig = require('../config/database');

const Clube = require('../models/Clube');
const Posicao = require('../models/Posicao');
const Jogador = require('../models/Jogador');


const connection = new Sequelize(dbConfig);

Clube.init(connection);
Posicao.init(connection);
Jogador.init(connection);

module.exports = connection;