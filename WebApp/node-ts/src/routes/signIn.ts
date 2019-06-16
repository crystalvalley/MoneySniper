import express from 'express';

const router = express.Router();

router.get('/signIn', (req: express.Request, res: express.Response) => {
    res.send('signIn get page!');
}).post('/signIn', (req: express.Request, res: express.Response) => {
    res.send('signIn post page!');
});

export { router as signIn };