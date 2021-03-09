const Trek = require('../model/trekModel');

exports.getHomepage = async (req, res) => {
  const treks = await Trek.find();

  res.status(200).render('homepage', {
    title: 'Welcome',
    treks,
  });
};

exports.getTrek = (req, res) => {
  res.status(200).render('trek', {
    title: 'Trek',
  });
};
