const mongoose = require('mongoose');
//Defining a schema for our treks
const trekSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A trek must have a name'],
    unique: true,
  },
  summary: String,
  price: {
    type: Number,
    required: [true, 'A trek must have a price'],
  },
});
//creating a Model using the above mongoose Sehema
const Trek = mongoose.model('Trek', trekSchema);

module.exports = Trek;
