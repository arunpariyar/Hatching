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

const app = require('./app');

const port = process.env.PORT || 3000;

/******************************* SERVER LISTENING *********************************/
//making our server listen at port 3000
app.listen(`${port}`, () => {
  console.log(
    `Welcome to Destination Annapura API running on port ${port}... `
  );
});
