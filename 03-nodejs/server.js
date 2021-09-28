const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true,
});
requireDir("./src/models");

app.use("/api", require("./src/routes"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Go to http://127.0.0.1:${PORT}`);
});
