const express = require("express");
const cors = require("cors");
const serverSetup = require("./server/setup");
const userRoute = require("./router/user");

const app = express();
serverSetup.serverSetup(app, cors, express);

app.listen(4000, serverSetup.serverConfigure());
app.use("/user", userRoute);
