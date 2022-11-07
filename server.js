require("dotenv").config();

/* == External  modules == */
const express = require("express");

/* == Internal  modules == */
const routes = require("./routes");

/* == cors == */
const cors = require('cors');

/* == express-session == */
const session = require("express-session");

/* PORT */
const PORT = process.env.PORT;

// MongoDBStore for sessions
const MongoDBStore = require("connect-mongodb-session")(session);

/* == Express Instance == */
const app = express();

/* == DB connection == */
require("./config/db.connection");

/* == middlewares == */
// Middleware telling express to expect JSON data in the body from AJAX
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Cors Middleware
const whitelist = ['http://localhost:3000', `${process.env.FRONTEND_URL}`];
const corsOptions = {
	origin: (origin, callback) => {
		console.log(whitelist, "WHITELIST")
		console.log(origin, "ORIGIN")
		if (whitelist.indexOf(origin) !== -1 || !origin) {
			callback(null, true);
		} else {
			callback(new Error('Not allowed by CORS'));
		}
	},
	// This is needed for accept credentials from the front-end
	// not needed if you are not implementing authentication
	credentials: true,
};

app.use(cors(corsOptions));

app.set('trust proxy', 1) // trust first proxy

// Sessions
// const SESSION_SECRET = process.env.SESSION_SECRET;
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MongoDBStore({
      uri: process.env.MONGODB_URI,
      collection: "mySessions",
    }),
    cookie: {
      sameSite: "none",
      secure: true,
    },
  })
);

const isAuthenticated = (req, res, next) => {
  if (req.session.currentUser) {
    return next();
  } else {
    res.status(403).json({ msg: "login required" });
  }
};

/* == Default Route == */
app.get("/", (req, res) => {
  console.log("pew pew pew");
  res.send("Mirror Mirror on the wall...");
});

/* == Route == */
app.use("/selfies", isAuthenticated, routes.selfies);
app.use("/users", routes.users);

/* == Server Bind == */
app.listen(PORT, () => {
  console.log(`Listening on test test ${PORT}`);
});
