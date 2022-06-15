const router = require("express").Router();
const {
  signup,
  login,
  Signcount,
  signupMiddle,
} = require("../controlllers/registry");
router.post("/signup", signup);
router.post("/login", login);
module.exports = router;
