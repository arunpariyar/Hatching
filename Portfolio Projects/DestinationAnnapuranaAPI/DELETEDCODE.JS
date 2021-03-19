/******************************* A PORTION OF BLOCKING CODE *********************************/
//DELETE:::::::::::::::::
/*const adventures = JSON.parse(
  fs.readFileSync(`${__dirname}/../test-data/data/adventures.json`)
);
*/
/*
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
*/
