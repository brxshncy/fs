import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
        });
        console.log(
            `Database is running at ${conn.connection.host}`.underline.cyan
        );
    } catch (error) {
        console.error(error);
    }
};
