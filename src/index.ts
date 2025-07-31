import express from 'express';
import { rateLimit } from 'express-rate-limit'
import {sendSuccess} from "./utils/express-http.js";

const port = 3501;

const app = express();

const limiter = rateLimit({
    windowMs: 60 * 1000,
    limit: 3,
    message: "Too Many Requests"
})

app.use(limiter);

app.post('/api/greet', async (req: express.Request, res: express.Response) => {
    req.requestTime = new Date().toISOString();
    console.log(req.requestTime);

    await sendSuccess(res, JSON.stringify({message: "Hello!"}))
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});