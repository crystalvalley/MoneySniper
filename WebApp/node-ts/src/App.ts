import express from 'express';
import { www, login, signIn } from './routes';

class App {
    public app: express.Application;

    /**
     * @class App
     * @method bootstrap
     * @static
     * 
     */
    public static bootstrap (): App {
        return new App();
    }

    constructor() {
        this.app = express();
        this.app.use('/', www);
        this.app.use('/login', login);
        this.app.use('/signIn', signIn);
    }
}

export default App;