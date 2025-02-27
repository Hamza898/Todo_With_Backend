const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("./db");
connectDB();

const port = process.env.PORT || 3000;

const taskRoutes = require("./routes/taskRoutes");

app.use(express.json());
app.use("/task", taskRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
