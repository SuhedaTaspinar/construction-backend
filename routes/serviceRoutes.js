const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/serviceController");
const auth = require("../middleware/auth");


router.post("/create-service", auth, serviceController.createService);

router.put("/update-service/:id", auth, serviceController.updateService);

router.delete("/delete-service/:id", auth, serviceController.deleteService);

router.get("/get-service", serviceController.getService)

router.get("/get-service-by-id/:id", serviceController.getServiceById)

module.exports = router;
