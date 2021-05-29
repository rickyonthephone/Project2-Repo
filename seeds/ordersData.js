const { Orders } = require('../models');

const ordersData = [
    {
      user_id: 2,
      first_name: "Will",
      last_name: "Hearn",
      street_address1: "7890 Adams St",
      street_address2: null,
      city: "Atlanta",
      state: "GA",
      zip_code: "30410",
      phone_number: "404-567-4567",
      order_date: "Dec 25, 2020",
      shipping_date: "Jan 1, 2021"
    },
    {
      user_id: 4,
      first_name: "Marine",
      last_name: "Bruno",
      street_address1: "9874 Canton St",
      street_address2: null,
      city: "Madison",
      state: "WI",
      zip_code: "53558",
      phone_number: "608-345-7890",
      order_date: "Sept 9, 2020",
      shipping_date: "Sept 14, 2020"
    },
    {
      user_id: 1,
      first_name: "Richard",
      last_name: "Crippen",
      street_address1: "12345 Smith St",
      street_address2: null,
      city: "Atlanta",
      state: "GA",
      zip_code: "30101",
      phone_number: "404-123-4567",
      order_date: "May 12, 2021",
      shipping_date: "May 17, 2021"
    },
    {
      user_id: 5,
      first_name: "Noah",
      last_name: "Hoback",
      street_address1: "12345 Peachford Rd",
      street_address2: null,
      city: "Dunwoody",
      state: "GA",
      zip_code: "30338",
      phone_number: "404-786-3456",
      order_date: "March 15, 2021",
      shipping_date: "March 21, 2021"
    },
    {
      user_id: 3,
      first_name: "Shawn",
      last_name: "Williams",
      street_address1: "4567 Oakridge St",
      street_address2: null,
      city: "Seattle",
      state: "WA",
      zip_code: "98101",
      phone_number: "404-987-1234",
      order_date: "April 3, 2021",
      shipping_date: "April 9, 2021"
    }
  ];

  const seedOrders = () => Orders.bulkCreate(ordersData);

  module.exports = seedOrders; 