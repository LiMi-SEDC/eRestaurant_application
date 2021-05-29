const express = require("express");
const cors = require("./const/cors.const");
const session = require("./const/session.const");
const firebase = require("./const/firebase.const");
const router = require("./const/router.const");

const app = express();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";

app.use(cors);
app.use(session);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", router);

app.listen(PORT, HOST, () => {
  console.log(`server is running on http://localhost:3000`);
});
