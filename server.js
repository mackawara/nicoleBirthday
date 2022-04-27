const express = require("express");
const app = express();
const cron = require("cron");
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.static("files"));
const path = require("path");
app.use("/static", express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
app.get(`/`, (req, res) => {
  res.sendFile("index.html");
});
