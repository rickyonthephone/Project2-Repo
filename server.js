//This code needs to be worked on because I am not up to date on what all of this is doing - specifically sessions, or the SequelizeStore constant.//

const path = require('path');
const express = require('express');
const session = require('express-session');
const handlebars = require('express-handlebars');
//save for when we have routes
const routes = require('./routes');
const sequelize = require('./config/connect');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Inform Express.js on which template engine to use
app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars({
  layoutsDir: `${__dirname}/view/layouts`
  }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
//API routes
app.use('/', routes)
// save for when routes are established
// app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});