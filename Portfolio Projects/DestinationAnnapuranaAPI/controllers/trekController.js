const Trek = require('../model/trekModel');
const APIFeatures = require('../utility/apiFeatures');

/******************************* ALIAS ROUTES  *********************************/
exports.aliasTopTreks = async (req, res, next) => {
  //pre-generate the filter options;
  req.query.limit = '2';
  req.query.sort = '-ratingsAverage,price';
  next();
};

/******************************* ALL OUR ROUTES  *********************************/
// using url parsing to directly express to the specified endpoint
exports.createTrek = async (req, res) => {
  try {
    const newTrek = await Trek.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        trek: newTrek,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: 'The Data Is Invalid',
    });
  }
};

exports.getAllTreks = async (req, res) => {
  try {
    //Creating a new APIFeature use
    const features = new APIFeatures(Trek.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    //SENDING RESPONSE
    const treks = await features.query;
    res.status(200).json({
      status: 'success',
      data: {
        treks: treks,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err,
    });
  }
};

exports.getTrek = async (req, res) => {
  try {
    const trek = await Trek.findById(req.params.id); //shorthand for Trek.findOne({_id: {req.params.id}})
    res.status(200).json({
      status: 'success',
      data: {
        trek: trek,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err,
    });
  }
};

exports.patchTrek = async (req, res) => {
  try {
    const trek = await Trek.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        trek: trek,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err,
    });
  }
};

exports.deleteTrek = async (req, res) => {
  try {
    await Trek.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err,
    });
  }
};
