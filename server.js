const express = require("express");
const cookieParser = require("cookie-parser");
const http = require("http");
const app = express();
const cors = require("cors");
const csrf = require("csurf");
const register = require("./routes/registry");
const server = http.createServer(app);

const PORT = process.env.PORT || 5000;
require("./models/database.js");
require('dotenv').config();
app
  .use(express.json())
  .use(cors())
  .use(cookieParser())
  .use(express.urlencoded({ extended: true }))
  .use("/api/auth", register)
  .use(csrf({cookie: true}))

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
// gion.com || hagonahackoyo.com