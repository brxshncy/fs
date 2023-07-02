import mongoose from "mongoose";

const FollowUserSchema = mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        followingUserId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timeStamps: true,
    }
);

export const FollowUser = mongoose.model("FollowUser", FollowUserSchema);
