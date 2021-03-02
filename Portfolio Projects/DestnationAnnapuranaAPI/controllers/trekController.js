const Trek = require('../model/trekModel');

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
    //1.BASIC FILTERING
    // building and adding querying feature
    const queryObj = { ...req.query };
    //take away the exlusions that are not required
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach((el) => delete queryObj[el]);

    //2. ADVANCED FILTERING FOR GREATER THAN AND LESS THAN FIELDS
    //convert the queryObj to string
    let queryString = JSON.stringify(queryObj);
    //replace the greater and less than sign to have a $ on using regular expressions
    queryString = queryString.replace(
      /\b(gte|gt|lte|lt)\b/g,
      (match) => `$${match}`
    );
    // save the query into a query value and then use that to search the query //convert to JSON
    const query = Trek.find(JSON.parse(queryString));

    //SENDING RESPONSE
    const treks = await query;
    res.status(200).json({
      status: 'success',
      data: {
        treks,
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
