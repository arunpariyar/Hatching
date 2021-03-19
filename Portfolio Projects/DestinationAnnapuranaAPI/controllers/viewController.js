const Trek = require('../model/trekModel');

exports.getHomepage = async (req, res) => {
  const treks = await Trek.find();

  res.status(200).render('homepage', {
    title: 'Welcome',
    treks,
  });
};

exports.getTrek = async (req, res) => {
  const trek = await Trek.findById(req.params.id);
  res.status(200).render('trek', {
    title: `${trek.name}`,
    trek,
  });
};
