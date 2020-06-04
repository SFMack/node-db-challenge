const express = require("express");
const db = require("../data/dbConfig.js");

const router = express.Router();

// CREATE
// create projects
router.post("/", (req, res) => {
  const newProject = req.body;
  console.log(newProject);

  db("projects")
    .insert(newProject)
    .then(ids => {
      db("projects")
        .where({ id: ids[0] })
        .then(newProjectData => {
          console.log(newProjectData);
          res.status(201).json(newProjectData);
        });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: "Could not create new project" });
    });
});

// READ
// get projects
router.get("/", (req, res) => {
  db("projects")
    .then(projectData => {
      res.status(201).json(projectData);
    })
    .catch(err => {
      console.log(err);
      res.status(404).json({ errorMessage: "Could not find projects" });
    });
});

module.exports = router;
