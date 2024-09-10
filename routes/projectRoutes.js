const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");
const auth = require("../middleware/auth");

router.post("/create-project", auth, projectController.createProject);

router.put("/update-project/:id", auth, projectController.updateProject);

router.delete("/delete-project/:id", auth, projectController.deleteProject);

router.get("/get-project", auth, projectController.getProject)

router.get("/get-project-by-id/:id", auth, projectController.getProjectById)

module.exports = router;
