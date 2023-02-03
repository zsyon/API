import { NextFunction, Request, Response } from 'express';

class AuthController {
  static async loginUser(req: Request, res: Response, nex: NextFunction) {
    res.send('login');
  }

  static async register(req: Request, res: Response, nex: NextFunction) {}
}

export default AuthController;
