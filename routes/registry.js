const router = require("express").Router();
const {
  signup,
  login,
  Signcount,
  signupMiddle,
} = require("../controllers/registry");
const {Skills} = require("../controllers/data.js")
router.post("/signup", signup);
router.post("/verify", signupMiddle);
router.post("/login", login);
module.exports = router;
