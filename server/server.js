const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/taskRoutes");
require("dotenv").config();

const app = express();
const port = process.env.PORT;
const uri = process.env.MONGODB_URI;

app.use(cors());
app.use(express.json());
app.use("/api/task", taskRoutes);

mongoose
  .connect(uri)
  .then(() => {
    app.listen(port, () => {
      console.log(`Connected to DB. Listening on Port ${port}`);
    });
  })
  .catch((err) => console.log(err));
