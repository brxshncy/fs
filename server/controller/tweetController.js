import asyncHandler from "express-async-handler";
import { Tweet } from "../model/TweetModel.js";

export const getTweet = asyncHandler(async (req, res) => {
    const tweets = await Tweet.find();

    res.status(200).json(tweets);
});

export const postTweet = asyncHandler(async (req, res) => {
    const { tweet } = req.body;

    if (!tweet) {
        res.status(400);
        throw new Error("Please add a tweet.");
    }

    const createdTweet = await Tweet.create({
        tweet,
        user: req.user.id,
    });

    res.status(203).json(createdTweet);
});
