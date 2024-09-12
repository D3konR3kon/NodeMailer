const express = require('express');
const router = express.Router();
const mailController = require('../controllers/sendMail')


router.post('/', mailController.createMail)


module.exports = router;