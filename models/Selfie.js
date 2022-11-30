const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const selfieSchema = new Schema(
  {
    title: { type: String },
    image: { type: String },
    year: { type: String },
    medium: { type: String },
  },
  { timestamps: true }
);

const Selfie = mongoose.model("Selfie", selfieSchema);

module.exports = Selfie;
