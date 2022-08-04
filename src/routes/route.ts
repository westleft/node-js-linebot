import { middleware, WebhookEvent } from "@line/bot-sdk";
import { Router, Request, Response } from "express";
import { textEventHandler } from "../controllers/textEventController";

const middlewareConfig = require("../config").middlewareConfig;

const router = Router();

router.get("/", (_req: Request, res: Response) => {
  console.log("??");
  res.send({ gg: "gg" });
});

router.post(
  "/",
  middleware(middlewareConfig),
  async (req: Request, res: Response): Promise<Response> => {
    const events: WebhookEvent[] = req.body.events;

    // Process all of the received events asynchronously.
    const results = await Promise.all(
      events.map(async (event: WebhookEvent) => {
        try {
          await textEventHandler(event);
        } catch (err: unknown) {
          if (err instanceof Error) {
            console.error(err);
          }

          // Return an error message.
          return res.status(500).json({
            status: "error",
          });
        }
      })
    );

    // Return a successfull message.
    return res.status(200).json({
      status: "success",
      results,
    });
  }
);

module.exports = router;
