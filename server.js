require("dotenv").config();

/* == External  modules == */
const express = require("express");

/* == Internal  modules == */
const routes = require("./routes");

/* == cors == */

/* PORT */
const port = process.env.PORT;

//  MongoDBStore for sessions

/* == Express Instance == */
const app = express();

/* == DB connection == */
require("./config/db.connection");

/* == Routes == */
// app.get("/", (req, res) => {
//   console.log("pew pew pew");
//   res.send("Mirror Mirror on the wall");
// });

app.use('/selfies', routes.selfies);

/* == Server Bind == */
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
