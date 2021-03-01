/******************************* INITIAL CONFIGURATION *********************************/

const express = require('express'); // creating our app varible.
const morgan = require('morgan'); //import a third party middleware called morgen
const userRouter = require('./route/userRouter');
const trekRouter = require('./route/trekRouter');

const app = express();

/******************************* USING A THIRD PARTIY MIDDLE WARE *********************************/
app.use(express.json()); // using the express.json middleware

const serverEnv = 'development';
if (process.env.NODE_ENV === serverEnv) {
  app.use(morgan('dev'));
}

/******************************* CREATING A MIDDLE WARE *********************************/
//simple middleware that allows us to add a requesttime to all incoming request
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

/******************************* MOUNTING OUR ROUTES *********************************/
app.use('/api/v1/treks/', trekRouter); //CHANGE HERE
app.use('/api/v1/users/', userRouter);

//exporting the app to be used by server.js
module.exports = app;
