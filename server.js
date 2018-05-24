// Require all of our dependencies
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var methodOverride = require("method-override");

// allow PORT to be set by Heroku
var PORT = process.env.PORT || 8080;

// Initialize our app
var app = express();

app.use(express.static('public'))
// Set our app to use body parser
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set our view engine to handlebars 

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(PORT, function() {
  console.log("Server listening on PORT " + PORT);
});