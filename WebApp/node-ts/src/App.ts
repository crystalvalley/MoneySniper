import express from 'express';
import { www } from './routes/www';

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
    }
}

export default App;