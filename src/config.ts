import { ClientConfig, Client, MiddlewareConfig } from "@line/bot-sdk";
require("dotenv").config();

const clientConfig: ClientConfig = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || "",
  channelSecret: process.env.CHANNEL_SECRET,
};

const middlewareConfig: MiddlewareConfig = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET || "",
};

const client = new Client(clientConfig);

module.exports = {
  client: client,
  middlewareConfig: middlewareConfig,
};