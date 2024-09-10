const express = require("express");
const router = express.Router();
const {registerUser, loginUser, currentUserInfo} = require("../controllers/userController")

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/currentInfo", currentUserInfo);

module.exports = router;