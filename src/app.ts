import express, { Application, Request, Response } from 'express';
import config from './config';
import database from './database';
import router from './routes/index.routes';
import localStrategy from './apis/passport/localStrategy';
import session from 'express-session'; // session middleware
import bodyParser from 'body-parser';
import jwtStr from './apis/passport/passport-jwt';
import swaggerDocs from './apis/swagger/swagger';

const app: Application = express();
const port: number = parseInt(config.port as string) || 5000;

// upload images to the server

// get images from the server
app.use(express.static('public'));
app.use('/images', express.static('images'));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
    session({
        secret: 'r8q,+&1LM3CD*zAGpx1xm{NeQhc;#',
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 60 * 60 * 1000 }, // 1 hour
    })
);

// Configure Middleware
app.use(localStrategy);
jwtStr.jwtStrategyMiddleware();

app.use('/api', router);
app.get('/', (req: Request, res: Response): void => {
    res.status(200).json('Welcome in  our Application!');
});

app.listen(port, () => {
    console.log(`🚀 Server ready at http://localhost:${port}`);
    database.connect();
    swaggerDocs(app, port);
});
