const express = require('express')
const router = express.Router();
const accessoriesRouter = require('../controllers/accessories')

router.get('/', accessoriesRouter.accessories);

module.exports = router;