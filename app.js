// Requires all modules needed.
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var bodyParser = require("body-parser");

// Makes an express app.
var app = express();

// First line tells express that the views are in the views folder, the next line says the views will use the Ejs engine.
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

// creates a global array to store all entries.
var entries = [];
// makes this entries array available in all views.
app.locals.entries = entries;

// uses morgan to log every request.
app.use(logger("dev"));

// Populates a variable called req.body if user is submitting a form. (The extended option is required.)
app.use(bodyParser.urlencoded({ extended: false }));

// When visiting the site root, renders the homepage(at views/index.js).
app.get("/", function(req, res) {
    res.render("index");
});

// Renders the "new entry" page (at views/index.js) when GETting the url
app.get("/new-entry", function(req, res) {
    res.render("new-entery");
});

// Defines a route handler when you POST to "new-entry" URL, in contrast to a GET
app.post("/new-entry", function(req, res) {
    // If user submites the form with no title or content, responds with a 400 error.
    if (!req.body.title || !req.body.body) {
        res.status(400).send("Entries must have a title and a body");
        return;
    }
    // Adds a new entry to the list of entries
    entries.push({
        title: req.body.title,
        body: req.body.body,
        published: new date()
    });
    // Redirects to the hompage to see your new entry
    res.redirect("/");
});

// Renders a 404 page because you are requesting an unknown source.
app.use(function(req, res) {
    res.status(404).render("404");
});

// Starts the server on port 3000!
http.createServer(app).listen(3000, function() {
    console.log("Guest book app stated at port 3000");
});

