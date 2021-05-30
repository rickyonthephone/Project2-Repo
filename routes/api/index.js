const router = require('express').Router();
const ordersRoutes = require('./ordersRoutes');

router.use ('/orders', ordersRoutes)

module.exports = router
