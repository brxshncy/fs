import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import { connectDb } from "./config/db.config.js";
import { authRoute } from "./routes/authrRoute.js";
import cors from "cors";
import { errorHandler } from "./middleware/errorMiddleware.js";
import { tweetRoute } from "./routes/tweetRoute.js";
import { followUserRoute } from "./routes/followUserRoute.js";

dotenv.config();

connectDb();
const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(
    express.urlencoded({
        extended: false,
    })
);

// API ROUTES
app.use("/api", authRoute);
app.use("/api/tweets", tweetRoute);
app.use("/api/follow-user", followUserRoute);
app.use(errorHandler);
app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`));
