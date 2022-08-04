// Function handler to receive the text.
import { WebhookEvent, TextMessage, MessageAPIResponseBase } from '@line/bot-sdk';
const client = require("../config").client

export const textEventHandler = async (
  event: WebhookEvent
): Promise<MessageAPIResponseBase | undefined> => {    
  // Process all variables here.
  console.log(event.type);
  if (event.type !== "message" || event.message.type !== "text") {
    return;
  }

  // Process all message related variables here.
  const { replyToken } = event;
  const { text } = event.message;
  
  // Create a new message.
  const response: TextMessage = {
    type: "text",
    text,
  };

  // Reply to the user.
  await client.replyMessage(replyToken, response);
};
