import speakeasy from "speakeasy";
import QRCode from "qrcode";
import { serialize, parse } from "cookie";

export default class TwoFactor {
  private APP_NAME: string;
  is_2FA_Enabled: boolean = false;

  constructor(appName: string) {
    this.APP_NAME = appName;
  }

  // 1. Enable 2FA
  async enable2FA(): Promise<string> {
    try {
      // 1.1. Generate secret
      const secret = this.getSecret();

      // Generate QR code
      const data_url = await this.generateQRCodeURL(secret);
      if (data_url) this.is_2FA_Enabled = true;
      return data_url;
    } catch (err) {
      console.error(err);
      return ""; // Or handle the error in a way that makes sense for your application
    }
  }

  private getSecret(): string {
    return JSON.stringify(
      speakeasy.generateSecret({
        name: this.APP_NAME,
      }),
    );
  }

  private async generateQRCodeURL(secret: string): Promise<string> {
    return await QRCode.toDataURL(secret);
  }

  // 2. Disable 2FA
  disable2FA() {
    // Implement the logic to disable 2FA for the user
    // Delete the secret from cookie
    // TODO: DELETE FORM COOKIESTORE
    this.is_2FA_Enabled = false;
  }
  check2FA(): boolean {
    return this.is_2FA_Enabled;
  }

  // 3. Verify 2FA
  verify2FA(token: string, path: string): boolean {
    const verificationResult = speakeasy.totp.verify({
      secret: this.getSecret(),
      encoding: "base32",
      token: token,
    });
    // store verification result as cookie
    this.setcookieStore(
      "2FA_Verification",
      verificationResult.toString(),
      30 * 24 * 60 * 60,
      path,
    );
    return verificationResult;
  }
  setcookieStore(cookieName: string, data: string, age: number, path: string) {
    // store cookie
    const SeralizedCookie = serialize(cookieName, data, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: age,
      path: path,
    });
    console.log("Set-Cookie:", SeralizedCookie);
  }
  getcookieStore(cookieName: string, cookie: string) {
    // get cookie
    const parsedCookie = parse(cookie);
    console.log("Cookie:", parsedCookie);
    return parsedCookie;
  }
}
