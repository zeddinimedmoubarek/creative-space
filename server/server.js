import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./db.js";
import userRoutes from "./routes/user.route.js";

//defining the app using express
const app = express();

//dotenv config
dotenv.config();

//App Configuration
// parse application/x-www-form-urlencoded
app.use(
  express.urlencoded({
    limit: "20mb",
    extended: true,
  })
);

// parse application/json
app.use(
  express.json({
    limit: "20mb",
    extended: true,
  })
);

//Setting up routes
app.use("/api/users", userRoutes);

app.use(cors());

//DataBase & Server conncetion
connectDB()
  .then(() =>
    app.listen(PORT, () => {
      console.log(
        `Connection established and running on port: ${PORT} in mode ${process.env.NODE_ENV}`
      );
    })
  )
  .catch((error) => console.log(error.message));

//Setting the port
const PORT = process.env.PORT || 5000;
