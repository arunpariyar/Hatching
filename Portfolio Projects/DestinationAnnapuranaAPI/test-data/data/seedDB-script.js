//import the fs module
const fs = require('fs');
//Everything related to connect with mongoose
const mongoose = require('mongoose');
//env var
const dotenv = require('dotenv');

dotenv.config({ path: `${__dirname}/../../config.env` });

//import our data model
const Trek = require('./../../model/trekModel');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connection to database successful'));

//read the file and save to variable treks
const treks = JSON.parse(
  fs.readFileSync(`${__dirname}/allTreks.json`, 'utf-8')
);
//write to the database
const exportToDB = async () => {
  try {
    await Trek.create(treks);
    console.log('Exported to Database');
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

//clear the database
const clearDatabase = async () => {
  try {
    await Trek.deleteMany();
    console.log('Database Cleared');
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

if (process.argv[2] === '--export') {
  exportToDB();
} else if (process.argv[2] === '--clear') {
  clearDatabase();
}
