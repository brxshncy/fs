import mongoose from "mongoose";

const TweetSchema = mongoose.Schema(
    {
        tweet: {
            type: String,
            required: [true, "Please enter your tweet."],
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timeStamps: true,
    }
);

export const Tweet = mongoose.model("Tweet", TweetSchema);
