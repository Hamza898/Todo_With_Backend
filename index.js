const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors= require('cors')
app.use(cors())

const connectDB = require("./db");
connectDB();

const port = process.env.PORT || 3000;

const taskRoutes = require("./routes/taskRoutes");
const doneTaskRoutes= require('./routes/doneTaskRoutes')

app.use(express.json());
app.use("/tasks", taskRoutes);
app.use('/doneTasks' ,doneTaskRoutes)

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
