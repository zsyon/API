import express from 'express';
import { loginUser } from '../../../controllers/auth/login';
var router = express.Router();

router.route('/login').get(loginUser); // http://localhost:3000/api/v1/auth/login
//router.route('/login').post(...);
//router.route('/login').patch(...);
//router.route('/login').delete(...);

export { router as testRouter };
