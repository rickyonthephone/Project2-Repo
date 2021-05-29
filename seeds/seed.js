const seedUsers = require('./usersData');
const seedOrders = require('./ordersData');
const seedOrderDetails = require('./orderDetails');
const seedCards = require('./cardsData');

const sequelize = require('../config/connect');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedOrders();
  console.log('\n----- ORDERS SEEDED -----\n');

  await seedCards();
  console.log('\n----- CARDS SEEDED -----\n');

  await seedOrderDetails();
  console.log('\n----- ORDER DETAILS SEEDED -----\n');

  process.exit(0);
};

seedAll();