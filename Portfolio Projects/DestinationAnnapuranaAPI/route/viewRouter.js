const express = require('express');

const router = express.Router();
const viewController = require('../controllers/viewController');

router.get('/', viewController.getHomepage);
router.get('/trek/:id', viewController.getTrek);

module.exports = router;
