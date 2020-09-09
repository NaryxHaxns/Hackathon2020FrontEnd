const dbOfficials = require('../../models/official');

const index = (req, res) => {
  dbOfficials.find({}, (err, foundOfficials) => {
    if (err) console.log("Error in official#index:", err);

    res.status(200).json(foundOfficials);
  });
};

const show = (req, res) => {
  dbOfficials.findById(req.params.id, (err, foundOfficial) => {
    if (err) console.log("Error in official#show:", err);

    res.status(200).json(foundOfficial);
  });
};

module.exports = {
  index,
  show,
};