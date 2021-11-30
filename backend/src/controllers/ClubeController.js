/* eslint-disable indent */
const Clube = require('../models/Clube');

module.exports = {

    
    async  GetAll(req, res)
    {
        // eslint-disable-next-line no-unused-vars
        const [clubes,metadata] = await Clube.sequelize.query('SELECT * from clubes');

        res.json(clubes);
    },
    async Add(req, res) 
    {    
    //    Pegando informações do corpo da requisição
        const 
        { 
            nome_clube,
            descricao_clube,
            imagem_clube,
            cor_clube_um,
            cor_clube_dois,
            
        } = req.body;
    // Insert na tabela Clubes
        // eslint-disable-next-line no-unused-vars
        const [ clube, metadata ] = await Clube.sequelize.query('INSERT INTO clubes (`nome_clube`,`descricao_clube`,`imagem_clube`, `cor_clube_um`, `cor_clube_dois`) VALUES (:sql_nome_clube, :sql_descricao_clube, :sql_imagem_clube, :sql_cor_clube_um, :sql_cor_clube_dois)',
        {
            replacements: {
                sql_nome_clube: nome_clube,
                sql_descricao_clube: descricao_clube,
                sql_imagem_clube: imagem_clube,
                sql_cor_clube_um: cor_clube_um,
                sql_cor_clube_dois: cor_clube_dois,
            }
        }
    );
        return res.json(clube);
    }
};