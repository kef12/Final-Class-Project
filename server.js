const express = require('express'); //check
// const favicon = require('express-favicon');
const path = require('path');
const logger = require("morgan");
const PORT = process.env.PORT || 8080; //check
//Requiring the models folder to access the recipes collection
const Recipe = require("./models")
const app = express(); //check
const mongoose = require("mongoose"); //check

// Use morgan logger for  logging results
app.use(logger("dev"));
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const mongoURL = process.env.PROD_MONGODB || "mongodb://127.00.1:27017/finalproject"
mongoose.connect(mongoURL, {useNewUrlParser: true})
  .then(() => {
    console.log("🗄 ==> Successfully connected to mongoDB.");
  })
  .catch((err) => {
    console.log(`Error connecting to mongoDB: ${err}`);
  });

//Route to post our recipe results to mongoDB via Mongoose

app.post("/saved", function(req, res) {
    // Create a new user using req.body
    User.create(req.body)
    .then(function(dbUser) {
      // If saved successfully, send the the new User document to the client
      res.json(dbUser);
    })
    .catch(function(err) {
      // If an error occurs, send the error to the client
      res.json(err);
    });
});


app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  // res.sendFil
});

app.listen(process.env.PORT || 8080, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
