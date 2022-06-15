const jwt = require("jsonwebtoken");
exports.createToken = async (payload, mode) => {
  let token;
  if(mode === "register"){
    token = jwt.sign({ ...payload }, process.env.SECRET, {
      expiresIn: "30d",
    });
  }else if(mode === "test"){
    token = jwt.sign({...payload}, process.env.SECRET);
  }
  return token;
};
