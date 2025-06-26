const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.use("/api/auth", require("./routes/auth"));
app.use("/api/appointments", require("./routes/appointments"));
// app.use("/api/users", require("./routes/users"));
// app.use("/api/users", require("./routes/users"));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
