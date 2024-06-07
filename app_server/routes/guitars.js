const express = require('express')
const router = express.Router();
const guitarRouter = require('../controllers/guitars')

router.get('/', guitarRouter.guitars);

module.exports = router;