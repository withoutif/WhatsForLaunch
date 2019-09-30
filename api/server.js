import express from 'express';
import missionData from './routes/missionData';
import launchCount from './routes/launchCount';

const app = express();
const port = 3001;
const host = '0.0.0.0';

app.set('port',port);
app.get('/', (req, res) => {
    res.json('invalid endpoint')
});
app.use('/count', launchCount);
app.use('/missions', missionData);

app.listen(port, host);
