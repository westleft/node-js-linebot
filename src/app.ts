import express, { Application } from 'express';

require("dotenv").config();
const router = require("./routes/route")

const app: Application = express();
app.use("/webhook", router)

// Bot所監聽的webhook路徑與port
app.listen(process.env.PORT || 8000, function () {
  console.log("[BOT已準備就緒]");
});