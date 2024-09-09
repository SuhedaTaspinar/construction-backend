const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");


router.post("/create-project", projectController.createProject);

router.put("/update-project/:id", projectController.updateProject);

router.delete("/delete-project/:id", projectController.deleteProject);

router.get("/get-project", projectController.getProject)

router.get("/get-project-by-id/:id", projectController.getProjectById)

module.exports = router;
