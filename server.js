// Require dependencies express to initialize the app and mongoose for the db
const express = require("express");
const mongoose = require("mongoose");

// Define our port on a const
const PORT = process.env.PORT || 5000;

// Store express functionality on an app const
const app = express();

// Tell express which dependencies to use
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Front end
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes to the front end js
app.use(require("./routes/api.js"));

// Set the port
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
