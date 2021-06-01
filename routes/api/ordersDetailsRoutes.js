const {getOrderDetailsById} = require('../../controllers/orderDetailsControl');
const express = require('express'); 

const router = express.Router();

router.route('/:id')
    .get(getOrderDetailsById)
    // .delete (controller for delete)
// router.route('/')
    // .post(controller code for new order)
    // .get(controller code to getAllOrders)

module.exports = router
