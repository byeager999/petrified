// Dependencies
var express = require("express");

// Set up express app
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models")


// Sets up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
require("./routes/html-routes.js");
require("./routes/post-api-routes.js");


// Syncing our sequelize models and starting our express app
db.sequelize.sync({}).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});

