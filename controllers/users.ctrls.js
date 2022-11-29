const db = require("../models");
const bcrypt = require("bcrypt");

// POST ROUTE sign up
const signup = (req, res) => {
  //hash and salt the password
  // res.send('I hit this route')
  req.body.password = bcrypt.hashSync(
    req.body.password,
    bcrypt.genSaltSync(10)
  );

  db.User.create(req.body, (error, createdUser) => {
    if (error) {
      res.status(400).json({ error: error.message });
    } else {
      console.log("user has been registered");
      res.status(201).json(createdUser);
      // req.session.currentUser = foundUser;
    }
  });
};

// USER LOGIN ROUTE (CREATE SESSION)
const login = (req, res) => {
  db.User.findOne({ username: req.body.username }, (err, foundUser) => {
    if (err) {
      res.send(err);
    } else {
      if (foundUser) {
        if (bcrypt.compareSync(req.body.password, foundUser.password)) {
          // login user and create session
          req.session.currentUser = foundUser;
          // add autentication ??
          // create JWTS??
          console.log(`${foundUser} has been logged in`);
          res.status(200).json(foundUser);
        } else {
          res.status(401).json({ error: "Incorrect username or password" });
        }
      } else {
        res.status(404).json({ error: err });
      }
    }
  });
};

// DELETE USER
const logout = (req, res) => {
  req.session.destroy(() => {
    console.log(`User has been logged out.`);
    res.status(200).json({ msg: "users logged out" });
  });
};

module.exports = {
  signup,
  login,
  logout,
};
