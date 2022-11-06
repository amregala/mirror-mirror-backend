const db = require("../models");

/* Index Controller */
const index = (req, res) => {
  res.send("Get route is working");
};

/* Create Controller */
const create = (req, res) => {
  db.Selfie.create(req.body, (error, createdSelfie) => {
    if (error) return res.status(400).json({ error: error.message });
    return res.status(200).json(createdSelfie);
  });
};

module.exports = {
  index,
  create,
};
