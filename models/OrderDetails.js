const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connect');

class OrderDetails extends Model {}

OrderDetails.init(
  {
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "orders",
          key: "order_id"
      }
    },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "cards",
          key: "product_id"
      }
    },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
      card_cost: {
        type: DataTypes.DECIMAL (3, 2),
        allowNull: false,
    },
      total_cost: {
        type: DataTypes.DECIMAL (4, 2),
        allowNull: false, 
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'orderdetails',
  }
);

module.exports = OrderDetails;