import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import { User } from "../model/UserModel.js";

export const protectRoute = asyncHandler(async (req, res, next) => {
    let token;

    const headerAuth = req.headers.authorization;

    if (headerAuth && headerAuth.startsWith("Bearer")) {
        token = headerAuth.split(" ")[1];

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.user = await User.findById(decoded.id).select("-password");
            next();
        } catch (error) {
            res.status(401);

            throw new Error("Not authorized.", error);
        }
    }

    if (!token) {
        res.status(401);
        throw new Error("Not authorized.");
    }
});
