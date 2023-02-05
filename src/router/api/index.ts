import express from 'express';
var router = express.Router();
import { authRouter } from './auth/router';

// import All route to here
router.use('/auth', authRouter);

export default router;

