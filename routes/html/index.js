const router = require('express').Router();
const path = require('path');

router.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/html/index.html'));
  });

  router.get('/signup.html', async (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/html/signup.html'));
  });
  router.get('/index.html', async (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/html/index.html'));
  });
  router.get('/logged.html', async (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/html/logged.html'));
  });
module.exports = router
