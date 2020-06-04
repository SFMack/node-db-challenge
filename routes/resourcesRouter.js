const express = require("express");
const db = require("../data/dbConfig.js");

const router = express.Router();

// CREATE
// create projects
router.post("/", (req, res) => {
  const newResource = req.body;
  console.log(newResource);

  db("resources")
    .insert(newResource)
    .then(ids => {
      db("resources")
        .where({ id: ids[0] })
        .then(newResourceData => {
          console.log(newResourceData);
          res.status(201).json(newResourceData);
        });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: "Could not create new resources" });
    });
});

// READ
// get resources
router.get("/", (req, res) => {
  db("resources")
    .then(resourceData => {
      res.status(201).json(resourceData);
    })
    .catch(err => {
      console.log(err);
      res.status(404).json({ errorMessage: "Could not find resources" });
    });
});

module.exports = router;
