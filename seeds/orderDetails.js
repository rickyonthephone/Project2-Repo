const { OrderDetails } = require('../models');

const orderDetailsData = [
    {
      order_id: 1,
      product_id: 3,
      quantity: 2,
    },
    {
      order_id: 1,
      product_id: 10,
      quantity: 1,
    },
    {
      order_id: 1,
      product_id: 9,
      quantity: 2,
    },
    {
      order_id: 2,
      product_id: 9,
      quantity: 2,
    },
    {
      order_id: 2,
      product_id: 7,
      quantity: 1,
    },
    {
      order_id: 3,
      product_id: 3,
      quantity: 4,
    },
    {
      order_id: 4,
      product_id: 1,
      quantity: 6,
    },
    {
      order_id: 5,
      product_id: 11,
      quantity: 2
    },
    {
      order_id: 5,
      product_id: 8,
      quantity: 1
    }
  ]

const seedOrderDetails = () => OrderDetails.bulkCreate(orderDetailsData);

module.exports = seedOrderDetails; 