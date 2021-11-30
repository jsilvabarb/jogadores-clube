const { Model, DataTypes } = require('sequelize');

class Clube extends Model 
{
    static init(sequelize) 
    {
        super.init(
            {
                nome_clube: DataTypes.STRING,
                descricao_clube: DataTypes.STRING,
                imagem_clube: DataTypes.STRING,
                cor_clube_um: DataTypes.STRING,
                cor_clube_dois: DataTypes.STRING,
            }, 
            {
                sequelize
            }
        );
    }
    static associate(models){
        this.hasMany(models.Posicao,  { foreignKey: 'id_clube', as: 'clube' });
        this.hasMany(models.Jogador,  { foreignKey: 'id_clube', as: 'clube' });
    }
}

module.exports = Clube;