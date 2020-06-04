const express = require("express");
const db = require("../data/dbConfig.js");

const router = express.Router();

// READ
// get tasks
router.get("/", (req, res) => {
  db("tasks")
    .then(taskData => {
      res.status(201).json(taskData);
    })
    .catch(err => {
      console.log(err);
      res.status(404).json({ errorMessage: "Could not find tasks" });
    });
});

module.exports = router;
