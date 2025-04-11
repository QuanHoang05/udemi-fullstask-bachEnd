const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World Tai dady mat may aaaa bbb ccc aaaaaaa!");
});
router.get("/abc", (req, res) => {
  res.send("Check code");
});
router.get("/hoidanit", (req, res) => {
  // res.send("<h1>Hoidanit</h1>");
  res.render("sample.ejs");
});

module.exports = router;
