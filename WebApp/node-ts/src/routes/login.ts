import express from 'express';

const router = express.Router();

router.get('/login', (req: express.Request, res: express.Response) => {
    res.send('login get page!');
}).post('/login', (req: express.Request, res: express.Response) => {
    res.send('login post page!');
});

export { router as login };