const express = require("express");
const router = express.Router();
const {registerUser, loginUser, currentUserInfo} = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");

//Register and login are public, anyone without the account can access it
//so no need to validate token
router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", validateToken, currentUserInfo);

module.exports = router;