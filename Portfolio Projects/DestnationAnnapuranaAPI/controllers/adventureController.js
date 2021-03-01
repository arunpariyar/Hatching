const fs = require('fs'); // importing express to the app

/******************************* A PORTION OF BLOCKING CODE *********************************/
const adventures = JSON.parse(
  fs.readFileSync(`${__dirname}/../test-data/data/adventures.json`)
);

//middleware to check if the given ID is valid
exports.checkID = (req, res, next, val) => {
  if (req.params.id * 1 > adventures.length) {
    return res.status(404).json({
      status: 'failed',
      message: 'Invalid ID',
    });
  }
  next();
};

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'failed',
      message: 'Missing name or price',
    });
  }
  next();
};

/******************************* ALL OUR ROUTES  *********************************/
exports.getAllAdventures = (req, res) => {
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: adventures.length,
    data: {
      adventures: adventures,
    },
  });
};

exports.getTrek = (req, res) => {
  // take in the id convert in to a number
  const id = Number(req.params.id);
  //search through the adventures and find and assign it to variable trek
  const trek = adventures.find((el) => el.id === id);
  if (!trek) {
    return res.status(404).json({
      status: 'failure',
      message: 'ID not found',
    });
  }
  // if the endpoint is not found display a 404 message
  res.status(200).json({
    status: 'success',
    results: adventures.length,
    data: {
      adventures: trek,
    },
  });
};
// using url parsing to directly express to the specified endpoint
exports.createTrek = (req, res) => {
  // create a new id for the adventure
  const newId = adventures[adventures.length - 1].id + 1;
  // create a new trek object and assign value
  const newTrek = Object.assign({ id: newId }, req.body);
  // add the trek to the adventure
  adventures.push(newTrek);
  //write the new treks to our original file after converting it into string
  fs.writeFile(
    `${__dirname}/../test-data/data/adventures.json`,
    JSON.stringify(adventures),
    (err) =>
      res.status('200').json({
        status: 'success',
        data: {
          adventures: newTrek,
        },
      })
  );
  // send a reply with the new tour that was created
  // res.send(newTrek);
};

exports.patchTrek = (req, res) => {
  //parse the url to get the ID and if id id greater than adventures length send a 404
  //dummy message to acknowledge the customer that the update is indeed done.
  res.status(200).json({
    status: 'success',
    message: `The trip with id no ${req.params.id} has been updated`,
  });
};

exports.deleteTrek = (req, res) => {
  //dummy message we are not deleting anything just yet
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
