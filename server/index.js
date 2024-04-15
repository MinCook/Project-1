const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");


const app = express();

require("dotenv").config();
const port = process.env.PORT;

app.use(methodOverride("_method"));
app.set("views", "./views");
app.set("view enigne", "pug");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(cookieParser());


const routeClient = require("./routes/client/index.routes");
routeClient(app);
const routeAdmin = require("./routes/admin/index.routes");
routeAdmin(app);

const database = require("./config/db");
database.connect();

app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});
