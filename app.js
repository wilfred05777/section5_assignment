const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

/// routes
const homeRoutes = require("./routes/home");
const userRoutes = require("./routes/users");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(userRoutes);
app.use(homeRoutes); /// default /

app.listen(3001);
