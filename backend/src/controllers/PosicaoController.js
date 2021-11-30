
/* eslint-disable indent */
// const Clube = require('../models/Clube');
const Posicao = require('../models/Posicao');

module.exports = {

    
    async  GetAll(req, res)
    {
        const { id_clube } = req.params;

        // eslint-disable-next-line no-unused-vars
        const [ posicoes, metadata ] = await Posicao.sequelize.query('SELECT posicoes.id, posicoes.id_clube, posicoes.posicao from posicoes join clubes on posicoes.id_clube = clubes.id WHERE posicoes.id_clube = :sql_id_clube',
            {
                replacements: {
                    sql_id_clube: id_clube,
                }
            }
        );

        res.json(posicoes);
    },
    async Add(req, res) 
    {    
    //    Pegando informações do corpo da requisição
        const { id_clube } = req.params;

        const  {
            posicao
        } = req.body;

        // Insert na tabela Posicoes
        // eslint-disable-next-line no-unused-vars
        const [ posicoes, metadata ] = await Posicao.sequelize.query('INSERT INTO posicoes (`id_clube`,`posicao`) VALUES (:sql_id_clube, :sql_posicao)',
            {
                replacements: {
                    sql_id_clube: id_clube,
                    sql_posicao: posicao,
                }
            }
        );

        return res.json(posicoes);
    }
};