const express = require('express');
const router = express.Router();
const { landingPage } = require('../controllers/authController');

router.get(
  '/',
  landingPage // '#swagger.ignore = true'
);

module.exports = router;