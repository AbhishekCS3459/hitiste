import Express from "express";

const router = Express.Router();
function PostLogin(req: Express.Request, res: Express.Response) {
  res.send("Login");
}
function PostSignup(req: Express.Request, res: Express.Response) {
  res.send("Signup");
}
function PostLogout(req: Express.Request, res: Express.Response) {
  res.send("Logout");
}
router.post("/login", PostLogin);
router.post("/signup", PostSignup);
router.post("/logout", PostLogout);

export default router;
