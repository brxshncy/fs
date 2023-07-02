import express from "express";
import { followUser } from "../controller/followUserController.js";
import { protectRoute } from "../middleware/authMiddleware.js";

const followUserRoute = express.Router();

followUserRoute.route("/").post(protectRoute, followUser);

export { followUserRoute };
