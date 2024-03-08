import Express from "express";
import TwoFactor from "../../../Services/2Factor";
const router = Express.Router();
const TWO_FACTOR = new TwoFactor("ISTE_2FA");

async function Enable2FAuth(req: Express.Request, res: Express.Response) {
  try {
    const qrCodeUrl = await TWO_FACTOR.enable2FA();
    res.send(qrCodeUrl);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
}

function Disable2FAuth(req: Express.Request, res: Express.Response) {
  res.send(TWO_FACTOR.disable2FA());
}

function Verify2FAuth(req: Express.Request, res: Express.Response) {
  res.send(TWO_FACTOR.verify2FA(req.body.token, req.body.path));
}

router.post("/enable-2FA", Enable2FAuth);
router.post("/disable-2FA", Disable2FAuth);
router.post("/verify-2FA", Verify2FAuth);

export default router;
