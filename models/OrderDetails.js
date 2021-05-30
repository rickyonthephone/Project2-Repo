const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connect');

class OrderDetails extends Model {}

OrderDetails.init(
  {
     id: {
       type: DataTypes.INTEGER,
       allowNull: false,
       primaryKey: true,
       autoIncrement: true,
  },
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
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'OrderDetails',
  }
);

module.exports = OrderDetails;