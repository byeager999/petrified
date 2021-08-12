// Requiring model for syncing
var db = require("../models");


module.exports = function (app) {

    // Pull back all the posts
    app.get("/api/posts", (req, res) => {
        db.Post.findAll({}).then(dbPost => {
            res.json(dbPost);
        });
    });

    app.get("/api/posts/lostIndicator/:lostIndicator", function (req, res) {
        db.Post.findAll({
            where: {
                lostIndicator: req.params.lostIndicator
            }
        }).then(function (dbPost) {
            res.json(dbPost)
        })
    });

    app.get("/api/posts/petType/:petType", function (req, res) {
        db.Post.findAll({
            where: {
                petType: req.params.petType
            }
        }).then(function (dbPost) {
            res.json(dbPost)
        })
    })

    app.post("/api/posts", function (req, res) {
        console.log(req.body);
        db.Post.create({
            lostIndicator:  req.body.lostIndicator,
            petName:        req.body.petName,
            petType:        req.body.petType,
            description:    req.body.description,
            location:       req.body.location,
            contactName:    req.body.contactName,
            contactNumber:  req.body.contactNumber,
            contactEmail:   req.body.contactEmail,
            petPic:         req.body.petPic
        }).then(function (dbPost) {
            res.json(dbPost);
        });
    });

    app.delete("api/posts/:id", function (req, res) {
        db.Post.destory({
            where: {
                id: req.params.id
            }
        }).then(function (dbPost) {
            res.json(dbPost);
        })
    })

    app.put("/api/posts", function (req, res) {
        db.Post.update({
            lostIndicator:      req.body.lostIndicator,
            petName:            req.body.petName,
            petType:            req.body.petType,
            description:        req.body.description,
            location:           req.body.location,
            contactName:        req.body.contactName,
            contactNumber:      req.body.contactNumber,
            contactEmail:       req.body.contactEmail,
            petPic:             req.body.petPic
        }, {
            where: {
                id: req.body.id
            }
        }).then(function (dbPost) {
            res.json(dbPost)
        })


    })
}

