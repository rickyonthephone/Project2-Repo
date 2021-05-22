const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connect');

class order_details extends Model {}

order_details.init(
  {
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: "orders",
          key: "id"
      }
    },
    customer_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
          model: "customer",
          key: "id"
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total_cost: {
      type: DataTypes.DECIMAL (6, 2),
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

module.exports = order_details;