import express from 'express';
import { payloadController } from '../controllers/payloadController';

const missionData = express.Router();

missionData.get('/:offset?/:limit?', payloadController);

export default missionData;