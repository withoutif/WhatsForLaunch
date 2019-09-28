import express from 'express';
import { payloadController } from '../controllers/payloadController';

const router = express.Router();

router.get('/', payloadController);

export default router;