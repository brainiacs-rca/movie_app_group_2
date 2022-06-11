const joi = require("joi");
exports.validateSignup = joi.object().keys({
  email: joi.string().email().required(),
  fullname: joi.string().min(3).required(),
  password: joi.string().min(8).regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[$&*#]).{8,}$/).required(),
});