const router = require('express').Router();
const Orders = require('../../models/Orders');


router.get('/', async (req, res) => {
    try {
  const ordersData = await Orders.findAll({ 
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      street_address1: req.body.street_address1,
      street_address2: req.body.street_address2,
      city: req.body.city,
      state: req.body.state,
      zip_code: req.body.zip_code,
      phone_number: req.body.phone_number,
      order_date: req.body.order_date
  
  });
  res.status(200).json(ordersData);
} catch (err) { 
    res.status(400).json(err);
}
const orders = ordersData.map((orders) => orders.get({ plain: true }));
      res.render('orders', { orders });
    });
      
    
module.exports = router
