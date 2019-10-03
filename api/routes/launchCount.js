import express from 'express';
import { countController } from '../controllers/countController';

const launchCount = express.Router();

/* Pagination should be handled by the UI,
This endpoint provides a count of launches
for the UI to maintain those data points*/

launchCount.get('/', countController);
    
export default launchCount;