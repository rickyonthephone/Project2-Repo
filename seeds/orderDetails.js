const { OrderDetails } = require('../models');

const orderDetailsData = [
    {
      order_id: 1,
      product_id: 5,
      quantity: 3,
      card_cost: 5.99,
      total_cost: 17.97
    },
    {
      order_id: 2,
      product_id: 9,
      quantity: 2,
      card_cost: 2.99,
      total_cost: 5.98
    },
    {
      order_id: 3,
      product_id: 3,
      quantity: 4,
      card_cost: 4.99,
      total_cost: 19.96
    },
    {
      order_id: 4,
      product_id: 1,
      quantity: 6,
      card_cost: 3.99,
      total_cost: 23.94
    },
    {
      order_id: 5,
      product_id: 11,
      quantity: 2,
      card_cost: 3.99,
      total_cost: 7.98
    }
  ]

const seedOrderDetails = () => OrderDetails.bulkCreate(orderDetailsData);

module.exports = seedOrderDetails; 