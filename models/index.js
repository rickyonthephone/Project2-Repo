const Users = require('./Users');
const Orders = require('./Orders');
const Cards = require('./Cards');
const OrderDetails = require('./OrderDetails');

Orders.belongsTo(Users, {
  foreignKey: 'user_id',
});

Cards.belongsToMany(Orders, {
  through: {
      model: OrderDetails
  },
    foreignKey: 'product_id'
});

Orders.belongsToMany(Cards, {
    through: {
        model: OrderDetails
    },
    foreignKey: 'order_id' 
});

module.exports = { 
    Users, 
    Orders, 
    Cards,
    OrderDetails,
 };

 