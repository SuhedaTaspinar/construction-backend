const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");
const auth = require("../middleware/auth");

router.post("/create-project", auth, projectController.createProject);

router.put("/update-project/:id", auth, projectController.updateProject);

router.delete("/delete-project/:id", auth, projectController.deleteProject);

router.get("/get-project", projectController.getProject)

router.get("/get-project-by-id/:id", projectController.getProjectById)

module.exports = router;
