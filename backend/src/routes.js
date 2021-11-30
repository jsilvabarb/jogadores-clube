const express = require('express');
const ClubeController = require('./controllers/ClubeController');
const PosicaoController = require('./controllers/PosicaoController');
const JogadorController = require('./controllers/JogadorController');

const routes = express.Router();

// Create e Post de filmes na tabela filmes
routes.get('/clubes', ClubeController.GetAll);
routes.post('/clubes', ClubeController.Add);



// Create e Post, tabela posicoes
routes.get('/:id_clube/posicoes', PosicaoController.GetAll);
routes.post('/:id_clube/posicao', PosicaoController.Add);


// CRUD Jogadores
routes.get('/:id_clube/:id_posicao/jogadores', JogadorController.GetAll);
routes.post('/:id_clube/:id_posicao/jogadores', JogadorController.Add);
routes.put('/:id_jogador/jogador', JogadorController.Update);
routes.delete('/:id_jogador/jogador', JogadorController.Delete);

module.exports = routes;
