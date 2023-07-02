import asyncHandler from "express-async-handler";
import { User } from "../model/UserModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
};

export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({
        email,
    });

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (user && isPasswordMatch) {
        res.status(200).json({
            user,
            token: generateToken(user._id),
        });
    } else {
        res.status(403);
        throw new Error("Invalid credentials.");
    }
});

export const registerUser = asyncHandler(async (req, res) => {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
        res.status(400);
        throw new Error("Please add all fields.");
    }

    const userExists = await User.findOne({
        email,
    });

    if (userExists) {
        res.status(400);
        throw new Error("Email has already been registered.");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        email,
        name,
        password: hashedPassword,
    });

    if (user) {
        res.status(203).json(user);
    } else {
        res.status(400);
        throw new Error("Invalid user data.");
    }
});
