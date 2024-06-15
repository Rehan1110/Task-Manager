import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/userRoute.js";
import cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGO_URL = process.env.MONGO_URI;

mongoose.connect(MONGO_URL)
        .then(() => {
          console.log("Database connected successfully");
          app.listen(PORT, () => {
            console.log(`App is listening on PORT ${PORT}`);
          });
        })
        .catch((err) => console.log(err));

    

    app.get("/",(req, res) => {
      res.render("Hello Rehan Abbas");
    });
    app.use("/api", route);    
  

        
