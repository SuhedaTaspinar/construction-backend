const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");
const auth = require("../middleware/auth");

router.post("/create-contact", auth, contactController.createContact);

router.put("/update-contact/:id", auth, contactController.updateContact);

router.delete("/delete-contact/:id", auth, contactController.deleteContact);

router.get("/get-contact", auth, contactController.getContact)

router.get("/get-contact-by-id/:id", auth, contactController.getContactById)

module.exports = router;
