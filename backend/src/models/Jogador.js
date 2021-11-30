const { Model, DataTypes } = require('sequelize');

class Jogador extends Model 
{
    static init(sequelize) 
    {
        super.init(
            {
                nome_jogador: DataTypes.STRING,
                descricao_jogador: DataTypes.STRING,
                imagem_jogador: DataTypes.STRING,
            }, 
            {
                sequelize
            }
        );
    }
    static associate(models){
        this.belongsTo(models.Clube,  { foreignKey: 'id_clube', as: 'clube' });
        this.belongsTo(models.Posicao,  { foreignKey: 'id_posicao', as: 'posicao' });
    }
}

module.exports = Jogador;