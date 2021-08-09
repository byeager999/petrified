// Requiring model for syncing
var db = require("../models");

// Pull back all the posts
app.get("/api/posts", (req, res) => {
    db.Post.findAll().then(results => {
        res.json(results);
    })
})