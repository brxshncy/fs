import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required."],
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "Password is required."],
        },
    },
    {
        timeStamps: true,
    }
);

export const User = mongoose.model("User", UserSchema);
