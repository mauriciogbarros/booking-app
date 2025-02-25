import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRoutes from "./routes/users";
import authRoutes from "./routes/auth";
import cookieParser from "cookie-parser";
import path from "path";
import { v2 as cloudinary } from 'cloudinary'
import myHotelRoutes from "./routes/my-hotels";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET
})

const app = express();

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
	origin: process.env.FRONTEND_URL,
	credentials: true
}));

// Endpoints
// app.get("/api/test", async (req: Request, res: Response) => {
//     res.json({ message: "Hello from express endpoint." });
// });

app.use(express.static(path.join(__dirname, "../../frontend/dist")));

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/my-hotels", myHotelRoutes);

app.get("*", (req: Request, res: Response) => {
	res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
})

app.listen(3000, () => {
	console.log("Server running on localhost:3000");
});