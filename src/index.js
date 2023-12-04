const express = require("express");
const cors = require("cors");
const serverSetup = require("./server/setup");
const userRoute = require("./router/user");
const productRoute = require("./router/products");
const productSelectedRouter = require("./router/productSelected");
const mainRoute = require("./router/index");

const app = express();
serverSetup.serverSetup(app, cors, express);

app.listen(4000, serverSetup.serverConfigure());
app.use("/", mainRoute);
app.use("/users", userRoute);
app.use("/products", productRoute);
app.use("/productSelected", productSelectedRouter);
