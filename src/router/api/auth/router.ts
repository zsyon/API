import express from 'express';
import AuthController from '../../../controllers/auth/login';
var router = express.Router();

router.route('/login').get(AuthController.loginUser); // http://localhost:3000/api/v1/auth/login
//router.route('/login').post(...);
//router.route('/login').patch(...);
//router.route('/login').delete(...);

export { router as authRouter };
