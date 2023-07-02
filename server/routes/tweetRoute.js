import express from "express";
import { getTweet, postTweet } from "../controller/tweetController.js";
import { protectRoute } from "../middleware/authMiddleware.js";

const tweetRoute = express.Router();

tweetRoute.route("/").get(protectRoute, getTweet).post(protectRoute, postTweet);

export { tweetRoute };
