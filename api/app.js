import express from 'express';
import missionData from './routes/missionData';

const env = process.env.NODE_ENV || 'dev';

const app = express();
const port = 8080;

app.set('port',port);

app.use('/', missionData);

app.listen(port);

