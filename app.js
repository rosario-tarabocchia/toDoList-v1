//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extender: true}));

app.set('view engine', 'ejs');

app.get("/", function(req, res) {

  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var today = new Date();
  var day = today.toLocaleDateString("en-US", options);

  res.render("list", {
    kindOfDay: day
  });

});


app.post("/", function (req, res){
  console.log(req.body.newItem);

});









app.listen(3000, function() {
  console.log("Server started on port 3000");

});
