import express from 'express';
import { payloadController, singleFlightController } from '../controllers/payloadController';

const missionData = express.Router();

missionData.get('/singleLaunch/:flightNumber?', singleFlightController);
missionData.get('/:offset?/:limit?', payloadController);


export default missionData;