import Express from "express";
import bcrypt from "bcrypt";
import bodyParser from "body-parser";
import cors from "cors";
// routes import
import TwoFactorAuth from "./routes/auth/2FA/2FactorAuth";
import TokenManager from "./routes/auth/Token/UserToken";
import UserAction from "./routes/auth/UserActions/LoginLogout";
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const hash = bcrypt.hashSync("B4c0//", salt);
require("dotenv").config();
const PORT = process.env.PORT || 4000;

const app = Express();
app.use(
  cors({
    origin: "http://localhost:3000",
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

// auth Routes: login, signup, logout
app.use("/api/auth", UserAction);

// Mulitple routes for token management
app.use("/api/auth", TokenManager);

// Routes for 2FA functions:
app.use("/api/auth", TwoFactorAuth);

app.listen(PORT, () => {
  console.log(`Server started at port http://localhost:${PORT}`);
});
