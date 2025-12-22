import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectWithDatabase from "./config/database.js";
import userRoutes from "./routes/user.routes.js";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//routes
app.use("/api/users/", userRoutes);

const port = process.env.PORT;

const startMyServer = async () => {
  try {
    await connectWithDatabase();
    app.listen(port, () => {
      console.log(`Port is successfully running on ${port}`);
    });
  } catch (error) {
    console.log(`error while connecting with the server : ${error.message}`);
  }
};

startMyServer();
