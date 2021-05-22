const customer = require('./customer');
const orders = require('./orders');
const cards = require('./cards');
const order_details = require('./order_details');

customer.hasMany(orders, {
  foreignKey: 'customer_id',
  onDelete: 'CASCADE'
});
 //stopping here, my brain is tired and needs to reset//
cards.belongsToMany(orders, {
  through: {
      model: order_details
  },
    foreignKey: 'order_id'  //could be product_id - I'm not sure.//
});

orders.hasMany(cards, {
    through: {
        model: order_details
    },
    foreignKey: 'product_id' //could be order_id - also not sure//
})

module.exports = { 
    customer, 
    orders, 
    cards,
    order_details,
 };