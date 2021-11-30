const { Model, DataTypes } = require('sequelize');

class Posicao extends Model 
{
    static init(sequelize) 
    {
        super.init(
            {
                posicao: DataTypes.STRING,
                
            }, 
            {
                sequelize
            }
        );
    }
    static associate(models){
        this.belongsTo(models.Clube,  { foreignKey: 'id_clube', as: 'clube' });
        this.hasMany(models.Jogador,  { foreignKey: 'id_posicao', as: 'posicao' });
    }
}

module.exports = Posicao;