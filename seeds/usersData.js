const { Users } = require('../models');

const usersData = [
    { 
      email: "richard@gmail.com",
      password: "password12"
    },
    {
      email: "WillH@gmail.com",
      password: "password13"
    },
    {
      email: "ShawnW@gmail.com",
      password: "password14"
    },
    {
      email: "marine@gmail.com",
      password: "password15"
    },
    {
      email: "noahoback@gmail.com",
      password: "password16"
    }
  ];

  const seedUsers = () => Users.bulkCreate(usersData);

  module.exports = seedUsers;  