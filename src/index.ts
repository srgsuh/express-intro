import express, {Request, Response} from 'express';
import { rateLimit } from 'express-rate-limit'
import {requestTime} from "./middleware/requestTime.ts";
import {formatDate} from "./utils/date-time-utils.js";
import {getConfigValue} from "./utils/config-utils.js";

const DEFAULT_PORT = 3501;

const port = getConfigValue<number>("server.port", DEFAULT_PORT);

const app = express();

const limiter = rateLimit({
    windowMs: 60 * 1000,
    limit: 3,
    message: "Too Many Requests"
})

app.use("/api/greet", limiter);
app.use(requestTime);

app.post("/api/greet", (req: Request, res: Response) => {
    sendGreeting(req, res);
});

app.get("/api/status", (req: Request, res: Response) => {
    sendStatus(req, res);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

function sendGreeting(req: Request, res: Response) {
    const response = {message: "Hello!", requestedAt: formatDate(req.requestTime)};
    res.status(200).json(response);
}

function sendStatus(req: Request, res: Response) {
    const response = {status: "Up and Running", requestedAt: formatDate(req.requestTime)};
    res.status(200).json(response);
}