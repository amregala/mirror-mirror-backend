const mongoose = require("mongoose");
const schema = mongoose.Schema;

const selfieSchema = new schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  uploadDate: { type: String, default: Date.now },
  imgMedium: { type: String, default: "unknown" },
  likes: { type: String, default: 0 },
  tags: [{ type: String }],
  creditLine: { type: String }
  //   year: { type: String, required: true },
});

const Selfie = mongoose.model("Selfie", selfieSchema);

module.exports = Selfie;
