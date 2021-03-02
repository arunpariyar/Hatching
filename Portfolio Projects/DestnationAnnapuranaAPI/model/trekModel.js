const mongoose = require('mongoose');
//Defining a schema for our treks
const trekSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A trek must have a name'],
    unique: true,
    trim: true,
  },
  summary: {
    type: String,
    trim: true,
  },
  elevation: {
    type: Number,
    required: [true, 'A trek must have an elevation'],
  },
  duration: {
    type: Number,
    required: [true, 'A trek must have duration'],
  },
  difficulty: {
    type: String,
    require: [true, 'A trek must have difficulty level'],
    trim: true,
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'a trek must have a group size'],
  },
  price: {
    type: Number,
    required: [true, 'A trek must have a price'],
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, 'A trek must have cover image'],
  },
  images: [String],
  startDates: [Date],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
//creating a Model using the above mongoose Sehema
const Trek = mongoose.model('Trek', trekSchema);

module.exports = Trek;
