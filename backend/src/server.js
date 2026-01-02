import dotenv from "dotenv";
import express from "express";
import {connectDB} from "./libs/db.js";
import authRoute from "./routes/authRoute.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// hiểu và đọc được express body dưới dạng json
app.use(express.json());

// middleware

// public routes
app.use("/api/auth", authRoute);
// private routes

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server bắt đầu trên cổng ${PORT}`);
  });
});
