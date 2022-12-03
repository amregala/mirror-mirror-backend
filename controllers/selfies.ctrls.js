const { default: mongoose } = require("mongoose");
// ObjectId = mongoose.Types.ObjectId;Id
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

// const one = (req, res) => {
//   db.Selfie.findOne({ title: "Gustave" }, (error, found) => {
//     if (error) return res.status(404).json({ error: error.message });

//     return res.status(200).json({
//       found,
//       requestedAt: new Date().toLocaleString,
//     });
//   });
// };

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

      return res.status(200).json(updatedSelfie);
    }
  );
};

/* Destroy Controller */
const destroy = (req, res) => {
  // const id = parseInt(req.params.id, 10);
  // _id: new mongoose.Types.ObjectId();
  db.Selfie.findByIdAndDelete(req.params.id, (error, deletedSelfie) => {
    if (error) return res.status(400).json({ error: error.message });

    return res.status(200).json({
      message: `Selfie ${deletedSelfie.title} deleted successfully`,
    });
  });
};

module.exports = {
  index,
  one,
  create,
  update,
  destroy,
};
