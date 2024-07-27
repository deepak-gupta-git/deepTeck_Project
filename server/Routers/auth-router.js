const express = require("express");
const router = express.Router();
const authControllers = require("../Controllers/auth-controllers")
const validate = require ("../middleware/validate-middleware")
const signupSchema = require("../validator/validator")
const authMiddleware = require("../middleware/auth.middleware")

// router.get("/",(req, res) =>{
//     res.status(200).send("hello from router")
// });

router.route("/").get(authControllers.home);
router.route("/register").post(validate(signupSchema) , authControllers.register);
router.route("/login").post(authControllers.login);
router.route("/user").get(authMiddleware, authControllers.user)

module.exports = router;