const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connect');

class orders extends Model {}

orders.init(
  {
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    customer_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
          model: "customer",
          key: "id"
      }
    },
    order_date: {
      type: DataTypes.DATETIME, //not sure why this datatype isn't working properly...//
      allowNull: false,
    },
    shipping_date: {
      type: DataTypes.DATE,
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

module.exports = orders;