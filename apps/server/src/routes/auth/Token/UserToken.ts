import Express from "express";

const router = Express.Router();
function RefreshToken(req: Express.Request, res: Express.Response) {
  res.send("RefreshToken");
}
function ForgotPassword(req: Express.Request, res: Express.Response) {
  res.send("ForgotPassword");
}
function ResetPassword(req: Express.Request, res: Express.Response) {
  res.send("ResetPassword");
}
function VerifyEmail(req: Express.Request, res: Express.Response) {
  res.send("VerifyEmail");
}
function SendVerificationEmail(req: Express.Request, res: Express.Response) {
  res.send("SendVerificationEmail");
}
function SendPasswordResetEmail(req: Express.Request, res: Express.Response) {
  res.send("SendVerificationEmail");
}
function SendEmailAddressChange(req: Express.Request, res: Express.Response) {
  res.send("SendEmailAddressChange");
}
function ChangeEmailAddress(req: Express.Request, res: Express.Response) {
  res.send("ChangeEmailAddress");
}
function ChangeUserName(req: Express.Request, res: Express.Response) {
  res.send("ChangeUserName");
}
function ChangeProfilePicture(req: Express.Request, res: Express.Response) {
  res.send("ChangeProfilePicture");
}
function DeleteAccount(req: Express.Request, res: Express.Response) {
  res.send("DeleteAccount");
}

router.post("/refresh-token", RefreshToken);
router.post("/forgot-password", ForgotPassword);
router.post("/reset-password", ResetPassword);
router.post("/verify-email", VerifyEmail);
router.post("/send-verification-email", SendVerificationEmail);
router.post("/send-password-reset-email", SendPasswordResetEmail);
router.post("/send-email-address-change-email", SendEmailAddressChange);
router.post("/change-email-address", ChangeEmailAddress);
router.post("/change-username", ChangeUserName);
router.post("/change-profile-picture", ChangeProfilePicture);
router.post("/delete-account", DeleteAccount);
export default router;
