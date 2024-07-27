const express = require("express");
const router = express.Router();
const contactFarm = require("../Controllers/contact-controllers");

router.route("/contact").post(contactFarm);

module.exports = router;
