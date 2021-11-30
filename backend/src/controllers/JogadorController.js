
/* eslint-disable indent */
// const Clube = require('../models/Clube');
const Jogador = require('../models/Jogador');

module.exports = {

    //GET
    async  GetAll(req, res)
    {
        const { id_posicao } = req.params;

        // eslint-disable-next-line no-unused-vars
        const [ jogadores, metadata ] = await Jogador.sequelize.query('SELECT jogadores.id, jogadores.id_clube, jogadores.id_posicao, jogadores.nome_jogador, jogadores.descricao_jogador, jogadores.imagem_jogador from jogadores join posicoes on jogadores.id_posicao = posicoes.id WHERE jogadores.id_posicao = :sql_id_posicao',
            {
                replacements: {
                    sql_id_posicao: id_posicao,
                }
            }
        );

        res.json(jogadores);
    },
    // CREATE
    async Add(req, res) 
    {    
    //    Pegando informações do corpo da requisição
        const { id_clube, id_posicao } = req.params;

        const {
            nome_jogador,
            descricao_jogador,
            imagem_jogador
        } = req.body;

        // Insert na tabela Posicoes
        // eslint-disable-next-line no-unused-vars
        const [ jogador, metadata ] = await Jogador.sequelize.query('INSERT INTO jogadores (`id_clube`,`id_posicao`, `nome_jogador`, `descricao_jogador`, `imagem_jogador`) VALUES (:sql_id_clube, :sql_id_posicao, :sql_nome_jogador, :sql_descricao_jogador, :sql_imagem_jogador)',
            {
                replacements: {
                    sql_id_clube: id_clube,
                    sql_id_posicao: id_posicao,
                    sql_nome_jogador: nome_jogador,
                    sql_descricao_jogador: descricao_jogador,
                    sql_imagem_jogador: imagem_jogador,
                }
            }
        );

        return res.json(jogador);
    },
    //UPDATE
    async Update(req, res) 
    {
        const { id_jogador } = req.params;
        const {
            nome_jogador,
            descricao_jogador,
            imagem_jogador
        } = req.body;

        // eslint-disable-next-line no-unused-vars
        const [ jogador_update, metadata ] = await Jogador.sequelize.query('UPDATE jogadores SET nome_jogador= :sql_nome_jogador, descricao_jogador=:sql_descricao_jogador, imagem_jogador=:sql_imagem_jogador WHERE id=:sql_jogador_id',
            {
                replacements: 
                {
                    sql_nome_jogador: nome_jogador,
                    sql_descricao_jogador: descricao_jogador,
                    sql_imagem_jogador: imagem_jogador,
                    sql_jogador_id:  id_jogador,
                }
            }
        );

        return res.json(jogador_update);
    },

    //DELETE
    async Delete(req, res) {

        const  { id_jogador } = req.params;

        // eslint-disable-next-line no-unused-vars
        const [ message, metadata ] = await Jogador.sequelize.query('DELETE from jogadores WHERE id = :sql_id_jogador',
            {
                replacements: {
                    sql_id_jogador: id_jogador,
                }
            }
        
        );

        return res.json(message);
    }
};