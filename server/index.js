import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import postRoutes from "./routes/posts.js";

//initialize express
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

//connect to mongodb
const CONNECTION_URL =
  "mongodb+srv://tuhanren:18Q7i9zdkWbKk49i@socialappmern.vf4yg.mongodb.net/?retryWrites=true&w=majority";

//port
const PORT = process.env.PORT || 5000;

//connect to database
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));

// mongoose.set("useFindAndModify", false);
