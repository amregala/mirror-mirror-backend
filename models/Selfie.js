const mongoose = require("mongoose");
const schema = mongoose.Schema;

const selfieSchema = new schema(
  {
    // name: { type: String },
    selfieArtworkTitle: { type: String },
    artistCreator: { type: String, required: true },
    image: { type: String, required: true },
    yearCreated: { type: String, required: true },
    //   uploadDate: { timestamps: true },
    imgMedium: { type: String, default: "unknown" },
    artistNationality: { type: String },
    located: { type: String },
    creditLine: { type: String },
    likes: { type: String, default: 0 },
    tags: [{ type: String }],
  },
  { timestamps: true }
);

const Selfie = mongoose.model("Selfie", selfieSchema);

module.exports = Selfie;
