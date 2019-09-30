import express from 'express';
import { payloadController } from '../controllers/payloadController';

const router = express.Router();

router.get('/:offset?/:limit?', payloadController);

export default router;