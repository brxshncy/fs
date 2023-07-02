import express from "express";
import {
    deleteTweet,
    getTweets,
    postTweet,
    showTweet,
    updateTweet,
} from "../controller/tweetController.js";
import { protectRoute } from "../middleware/authMiddleware.js";

const tweetRoute = express.Router();

tweetRoute
    .route("/")
    .get(protectRoute, getTweets)
    .post(protectRoute, postTweet);
tweetRoute
    .route("/:id")
    .get(protectRoute, showTweet)
    .put(protectRoute, updateTweet)
    .delete(protectRoute, deleteTweet);

export { tweetRoute };
