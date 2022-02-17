//jshint esversion:6

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');

let items = [];

app.get("/", function(req, res) {

  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let today = new Date();
  let day = today.toLocaleDateString("en-US", options);

  res.render("list", {
    kindOfDay: day,
    newListItems: items, 
  });

});


app.post("/", function (req, res){
  let item = req.body.newItem;
  items.push(item);

  res.redirect("/");

});









app.listen(3000, function() {
  console.log("Server started on port 3000");

});
