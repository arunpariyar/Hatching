exports.getHomepage = (req, res) => {
  res.status(200).render('homepage', {
    title: 'Welcome',
  });
};

exports.getTrek = (req, res) => {
  res.status(200).render('trek', {
    title: 'Trek',
  });
};
