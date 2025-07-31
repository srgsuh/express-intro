import express, {Request, Response} from 'express';
import { rateLimit } from 'express-rate-limit'
import {sendSuccess} from "./utils/express-http.js";
import {requestTime} from "./middleware/requestTime.js";

const port = 3501;

const app = express();

const limiter = rateLimit({
    windowMs: 60 * 1000,
    limit: 3,
    message: "Too Many Requests"
})
app.use(requestTime);
app.use("/api/greet", limiter);

app.post("/api/greet", async (req: express.Request, res: express.Response) => {
    await sendSuccess(res, JSON.stringify({message: "Hello!", requestedAt: req.requestTime.toISOString()}));
});

app.get("/api/status", async (req: Request, res: Response) => {
    await sendSuccess(res, JSON.stringify({status: "Up and Running", requestedAt: req.requestTime.toISOString()}));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});