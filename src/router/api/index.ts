import express from 'express';
var router = express.Router();
import { testRouter } from './auth/router';

// import All route to here
router.use('/auth', testRouter);

export default router;
