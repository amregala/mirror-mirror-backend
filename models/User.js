const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
  },
  { timestamps: true }
);

// authenticate input against database documents
// userSchema.statics.autenticate = function (email, password, callback) {
//   User.findOne({ email: email }).exec(function (error, user) {
//     if (error) {
//       return callback(error);
//     } else if (!user) {
//       var err = new Error("User not found.");
//       err.status = 401;
//       return callback(err);
//     }
//     bcrypt.compare(password, user.password, function (error, result) {
//       if (result === true) {
//         return callback(null, user);
//       } else {
//         return callback();
//       }
//     });
//   });
// };

const User = mongoose.model("User", userSchema);

module.exports = User;
