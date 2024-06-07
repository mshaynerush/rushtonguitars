const express = require('express')
const router = express.Router();
const kitsRouter = require('../controllers/kits')

router.get('/', kitsRouter.kits);

module.exports = router;