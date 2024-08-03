const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const taskRoutes = require("./routes/taskRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const port = process.env.PORT;
const uri = process.env.MONGODB_URI;

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use("/api/task", taskRoutes);
app.use("/api/user", userRoutes);

mongoose
  .connect(uri)
  .then(() => {
    app.listen(port, () => {
      console.log(`Connected to DB. Listening on Port ${port}`);
    });
  })
  .catch((err) => console.log(err));
