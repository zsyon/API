class AuthController {
  static async loginUser(req: any, res: any, nex: any) {
    res.send('login');
  }

  static async register(req: any, res: any, nex: any) {}
}

export default AuthController;
