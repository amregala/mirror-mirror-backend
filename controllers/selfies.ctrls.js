const db = require("../models");

/* Index Controller */
const index = (req, res) => {
  db.Selfie.find({}, (error, selfies) => {
    if (error) return res.status(400).json({ error: error.message });

    return res.status(200).json({
      selfies,
      requestedAt: new Date().toLocaleString(),
    });
  });
};

/* Create Controller */
const create = (req, res) => {
  db.Selfie.create(req.body, (error, createdSelfie) => {
    if (error) return res.status(400).json({ error: error.message });
    return res.status(200).json(createdSelfie);
  });
};

/* Update Controller */
const update = (req, res) => {
  db.Selfie.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true },
    (error, updatedSelfie) => {
      if (error) return res.status(400).json({ error: error.message });

      return res.status(200).json(updatedSelfie)
    }
  );
};

/* Destroy Controller */
const destroy = (req, res) => {
  db.Selfie.findByIdAndDelete(req.params.id, (error, deletedSelfie) => {
    if (error) return res.status(400).json({ error: error.message });

    return res.status(200).json({
      message: `Selfie ${deletedSelfie.name} deleted successfully`,
    });
  });
};

module.exports = {
  index,
  create,
  update,
  destroy,
};
