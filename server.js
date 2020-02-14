const express = require("express");
const connectDB = require("./config/db");

const app = express();

//connect DB
connectDB();

//middleware
app.use(express.json({ extended: false }));
//routes

app.use("/api/users", require("./routes/users"));
app.use("/api/questions", require("./routes/questions"));
app.use("/api/auth", require("./routes/auth"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server started "));
