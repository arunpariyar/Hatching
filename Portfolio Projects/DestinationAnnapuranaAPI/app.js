/******************************* INITIAL CONFIGURATION *********************************/

const path = require('path');
const express = require('express'); // creating our app varible.
const morgan = require('morgan'); //import a third party middleware called morgen
const userRouter = require('./route/userRouter');
const trekRouter = require('./route/trekRouter');
const viewRouter = require('./route/viewRouter');

const app = express();

/******************************* PUG: TEMPLATING ENGINE *********************************/
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

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
app.use('/', viewRouter);
app.use('/api/v1/treks/', trekRouter);
app.use('/api/v1/users/', userRouter);

/******************************* SERVING STATIC FILES *********************************/
app.use(express.static(path.join(__dirname, 'public')));

//Pug Experiment

//exporting the app to be used by server.js
module.exports = app;
