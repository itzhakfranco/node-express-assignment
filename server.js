const express = require("express");
const connectDB = require("./config/db");
const app = express();
const cors = require("cors");

connectDB();

app.use(cors());
app.use(express.json());
app.use("/users/", require("./routes/users"));

const PORT = 7777;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
