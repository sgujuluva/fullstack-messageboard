import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import cookieSession from "cookie-session"
import passport from "passport";
import configureJwtStrategy from "./passport-config.js";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
//Routes
import userRoutes from "./routes/user.js";
import messageRoutes from "./routes/message.js";

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(
  cookieSession({
    name:"session",
    keys:["cyberwolve"],
    maxAge:24*60*100
  })
)
app.use(express.json({ 
  extended: true, //to upload foto
  limit: "10mb",
}));

dotenv.config();
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

configureJwtStrategy(passport);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const port = process.env.PORT || 3001;

// specify your routes here
app.use("/user", userRoutes);
app.use("/message", messageRoutes);

console.log("Connecting to database. Put the kettle on while you wait... 🫖");

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Database connected! 😍☕"))
  .catch((error) => console.log(error, "Database did not connect! ☹️❌"));

  // Serve frontend client/build folder
app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(3001, () => console.log("The server is listening... 🐒"));
