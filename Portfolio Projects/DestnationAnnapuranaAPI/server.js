//import mongoose
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

//get the env variable and save it to DB
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

//connect to mongoose //pass in some options for deprecation warning and // log connection successfull message
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connection to database successful'));

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

const ABC = new Trek({
  name: 'Annapurna Base Camp',
  summary: 'Stand on the Feet on the Giant',
  price: 800,
});

ABC.save()
  .then((trek) => {
    console.log(trek);
  })
  .catch((err) => {
    console.log(err);
  });
//Creating trek using the .create()
/*
Trek.create(
  {
    name: 'Begnas Trek',
    summary: 'Enjoy the mountains without leaving Pokhara',
    price: 500,
  },
  (err, ausCamp) => {
    if (err) return handleError(err);
    console.log(ausCamp);
  }
);
*/
const app = require('./app');

const port = process.env.PORT || 3000;

/******************************* SERVER LISTENING *********************************/
//making our server listen at port 3000
app.listen(`${port}`, () => {
  console.log(
    `Welcome to Destination Annapura API running on port ${port}... `
  );
});
