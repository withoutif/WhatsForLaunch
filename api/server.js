import express from 'express';
import bodyParser from 'body-parser';
import missionData from './routes/missionData';
import launchCount from './routes/launchCount';
import favorites from './routes/favorites';

import cors from 'cors';

const app = express();
const port = 3001;
const host = '0.0.0.0';


//find better/secure solution
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/', (req, res) => {
    res.json('invalid endpoint')
});

app.use('/count', launchCount);
app.use('/missions', missionData);
app.use('/favorite', favorites);

app.listen(port, host);
