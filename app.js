// app.js
const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user.routes");

const app = express();

app.use(bodyParser.json());
app.use("/api/users", userRoutes);

const PORT = 3000;

app.listen(PORT, function () {
  console.log(`Server running on http://localhost:${PORT}`);
});
