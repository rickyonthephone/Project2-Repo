const sequelize = require("../config/connect");
const Order = require("../models/Orders");
const OrderDetails = require("../models/OrderDetails");
const e = require("express");

const getOrderDetailsById = async (req, res) => {
  const { id } = req.params;
  try {
    const orders = await OrderDetails.findAll({
      where: {
        order_id: id,
      },
    });
    console.log(orders);
    if (orders) {
      res.status(200).json(orders);
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = { getOrderDetailsById };
