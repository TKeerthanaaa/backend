import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";
import blogRouter from "./routes/blog-routes.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
app.use("/", (req, res) => {
  res.status(200).send("<h1>Welcome to the product server</h1>");
});
mongoose
  .connect(
    "mongodb+srv://Keerthana:Keerthana-0620@cluster0.w6ukcbk.mongodb.net/Blog?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("Connected to Database and Listening to Localhost 5000")
  )
  .catch((err) => console.log(err));
