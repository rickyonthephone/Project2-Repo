const { Cards } = require('../models');

const cardsData = [
    {
      occasion: "Valentines",
      design: "Hearts",
      message_type: "Be My Valentine",
      font: "Cursive",
      plays_music: 0,
      card_price: 3.99,
      stock: 22
    },
    {
      occasion: "Birthday",
      design: "Cakes",
      message_type: "They Say It's Your Birthday",
      font: "Block",
      plays_music: 1,
      card_price: 6.99,
      stock: 40
    },
    {
      occasion: "Anniversary",
      design: "Candles and Lace",
      message_type: "Happy Anniversary",
      font: "Cursive",
      plays_music: 0,
      card_price: 4.99,
      stock: 12
    },
    {
      occasion: "Thank You",
      design: "Exclamations",
      message_type: "Thank You SO Much",
      font: "Modern",
      plays_music: 0,
      card_price: 3.99,
      stock: 56
    },
    {
      occasion: "Wedding",
      design: "Rings on Hands",
      message_type: "Congratulations",
      font: "Allegro",
      plays_music: 0,
      card_price: 5.99,
      stock: 19
    },
    {
      occasion: "Sympathy",
      design: "Doves",
      message_type: "Sorry for Your Loss",
      font: "Comic Sans",
      plays_music: 0,
      card_price: 3.99,
      stock: 47   
    },
    {
      occasion: "Father's Day",
      design: "Scenic Beach",
      message_type: "Best Dad Ever",
      font: "Boulder",
      plays_music: 0,
      card_price: 4.99,
      stock: 34
    },
    {
      occasion: "Mother's Day",
      design: "Scenic Mountains",
      message_type: "Mommy Dearest",
      font: "Arial",
      plays_music: 0,
      card_price: 5.99,
      stock: 55
    },
    {
      occasion: "Get Well Soon",
      design: "Blue",
      message_type: "Hope You Get Well Soon",
      font: "Calisto",
      plays_music: 0,
      card_price: 2.99,
      stock: 38
    },
    {
      occasion: "New Baby",
      design: "Baby",
      message_type: "Welcome to the World",
      font: "Bazooka",
      plays_music: 1,
      card_price: 6.99,
      stock: 40
    },
    {
      occasion: "Congratulations",
      design: "Party time",
      message_type: "Our Hats are Off to You!",
      font: "Block",
      plays_music: 0,
      card_price: 3.99,
      stock: 14
    }, 
    {
      occasion: "Graduation",
      design: "Grad caps in the air",
      message_type: "You did it!",
      font: "Cursive",
      plays_music: 1,
      card_price: 6.99,
      stock: 24
    }
  ]

const seedCards = () => Cards.bulkCreate(cardsData);

module.exports = seedCards; 