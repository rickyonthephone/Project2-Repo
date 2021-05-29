const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connect');

class Cards extends Model {}

Cards.init(
  {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    occasion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    design: {
      type: DataTypes.STRING,
    },
    message_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    font: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    plays_music: {
      type: DataTypes.TINYINT(1),
      allowNull: false,
    },
    card_price: {
    type: DataTypes.DECIMAL (4, 2),
    allowNull: false,
    },
    stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'cards',
  }
);

module.exports = Cards;
