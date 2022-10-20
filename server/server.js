import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"
import userRoutes from "./routes/user.js";
import messageRoutes from "./routes/message.js";

const app = express();

dotenv.config();

// specify your middleware here

app.use(express.json());

app.use(cors({
  origin:"*"
}));

// specify your routes here
app.use("/user",userRoutes);
app.use("/message",messageRoutes);

console.log("Connecting to database. Put the kettle on while you wait... 🫖");

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Database connected! 😍☕"))
  .catch((error) => console.log(error, "Database did not connect! ☹️❌"));

app.listen(3001, () => console.log("The server is listening... 🐒"));
