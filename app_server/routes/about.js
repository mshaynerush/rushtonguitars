const express = require('express')
const router = express.Router();
const aboutRouter = require('../controllers/about')

router.get('/', aboutRouter.about);

module.exports = router;