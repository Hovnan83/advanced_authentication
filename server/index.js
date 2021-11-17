import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import router from "./router/index.js";
import errorMiddleware from "./middlewares/error-middleware.js";
//
dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/api", router);
app.use(errorMiddleware);

//const PORT = 5000;
const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
  } catch (error) {
    console.log(e.message || e);
  }
};

start();
