const express = require('express');

const router = express.Router();
const viewController = require('../controllers/viewController');

router.get('/', viewController.getHomepage);
router.get('/trek', viewController.getTrek);

module.exports = router;
