const express = require('express');
//router for all the adventures route
const router = express.Router();

const {
  getAllAdventures,
  createTrek,
  getTrek,
  patchTrek,
  deleteTrek,
  checkID,
  checkBody,
} = require('../controllers/adventureController');

//applying checkID middleware using params
router.param('id', checkID);

//create a middle ware that checks if the request body contains trips name and price
// if not i must send a 404

//USING EXPRESS ROUTE CHAINING TO MAKE THE CODE SUCCIENT
// get request for the root // post request for the root
router.route('/').get(getAllAdventures).post(checkBody, createTrek);
//get a specific trek //patch a trek //deleting a trip
router.route('/:id').get(getTrek).patch(patchTrek).delete(deleteTrek);

module.exports = router;
