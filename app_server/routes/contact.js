const express = require('express')
const router = express.Router();
const contactRouter = require('../controllers/contact')

router.get('/', contactRouter.contact);

module.exports = router;