import express from "express";
import { loginUser, registerUser } from "../controller/authController.js";

const authRoute = express.Router();

authRoute.route("/login").post(loginUser);
authRoute.route("/register").post(registerUser);

export { authRoute };
