import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./db.js";

const app = express();

app.use(
  express.urlencoded({
    limit: "20mb",
    extended: true,
  })
);

app.use(
  express.json({
    limit: "20mb",
    extended: true,
  })
);

app.use(cors());

//DataBase & Server conncetion
connectDB()
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Connection established and running on port: ${PORT}`);
    })
  )
  .catch((error) => console.log(error.message));

const PORT = process.env.PORT || 5000;
