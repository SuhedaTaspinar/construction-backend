const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");


router.post("/create-contact", contactController.createContact);

router.put("/update-contact/:id", contactController.updateContact);

router.delete("/delete-contact/:id", contactController.deleteContact);

router.get("/get-contact", contactController.getContact)

router.get("/get-contact-by-id/:id", contactController.getContactById)

module.exports = router;
