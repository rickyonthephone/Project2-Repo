const router = require('express').Router();
const ordersRoutes = require('./ordersDetailsRoutes');

router.use ('/orders', ordersRoutes)

module.exports = router