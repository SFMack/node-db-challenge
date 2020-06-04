const express = require("express");
const projectsRouter = require("../routes/projectsRouter.js");
const tasksRouter = require("../routes/tasksRouter.js");
const resourcesRouter = require("../routes/resourcesRouter.js");

const server = express();

server.use(express());
server.use("/api/projects", projectsRouter);
server.use("/api/tasks", tasksRouter);
server.use("/api/resources", resourcesRouter);
server.use(express.json());

server.get("/", (req, res) => {
  res.send("Server is running");
});

module.exports = server;
