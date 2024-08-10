const express = require("express");
const {signin,signup,signout} = require("../controllers/auth.controller")
const router = express.Router();

router.post("/signup",signup);

router.post("/login",signin);

router.post("/logout",signout);

module.exports = router;