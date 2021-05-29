const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connect');

class Orders extends Model {}

Orders.init(
  {
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: "users",
          key: "user_id"
      }
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    street_address1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    street_address2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zip_code: {
      type: DataTypes.INTEGER, 
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        len:[12],
      },
    }, 
    order_date: {
      type: DataTypes.DATE,
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
    modelName: 'orders',
  }
);

module.exports = Orders;