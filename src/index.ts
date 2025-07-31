import express from 'express';
import { rateLimit } from 'express-rate-limit'

const port = 3501;

const app = express();

const limiter = rateLimit({
    windowMs: 60 * 1000, // 15 minutes
    limit: 3, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
    message: "Too Many Requests"
})

app.use(limiter);

app.post('/api/greet', (req: express.Request, res: express.Response) => {
  res.send('Hello TTT World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});