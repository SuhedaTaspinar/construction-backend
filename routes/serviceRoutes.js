const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/serviceController");


router.post("/create-service", serviceController.createService);

router.put("/update-service/:id", serviceController.updateService);

router.delete("/delete-service/:id", serviceController.deleteService);

router.get("/get-service", serviceController.getService)

router.get("/get-service-by-id/:id", serviceController.getServiceById)

module.exports = router;
