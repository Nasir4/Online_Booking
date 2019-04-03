const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/dev");
const Fakedb = require("./fake-db");
const rentalRoute = require("./routes/rentals");

mongoose.connect(config.DB_URL).then(() => {
  const fakeDb = new Fakedb();
  fakeDb.seedDb();
});

const app = express();
app.use("/api/v1/rentals", rentalRoute);

const port = process.env.PORT || 3100;

app.listen(port, () => {
  console.log("port running on 3100");
});
