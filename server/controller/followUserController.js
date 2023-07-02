import asyncHandler from "express-async-handler";
import { User } from "./../model/UserModel.js";
import { FollowUser } from "../model/FollowUserModel.js";

export const followUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.body.userId);

    if (!user) {
        res.status(404);
        throw new Error("User not found.");
    }

    const followUserPayload = {
        followingUserId: user.id,
        userId: req.user.id,
    };

    const userFollowAlready = await FollowUser.find({
        $and: [
            {
                followingUserId: user.id,
            },
            {
                userId: req.user.id,
            },
        ],
    });

    if (userFollowAlready.length) {
        res.status(400);
        throw new Error("User followed already.");
    }

    const followUser = await FollowUser.create(followUserPayload);
    res.status(203).json({
        followUser,
        user,
        message: `You followed ${user.name}.`,
    });
});
