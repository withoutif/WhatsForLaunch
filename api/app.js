import express from 'express';
import missionData from './routes/missionData';

const app = express();
const port = 8080;

app.set('port',port);

app.use('/', missionData);

app.listen(port);

