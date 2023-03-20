const express = require("express");
const cors = require("cors");
const connectDB = require("./db/connect");
const config = require("./config/config");
const authRouter = require("./routes/authRoutes");
const supplierRouter = require("./routes/supplierRoutes");
const costumerRouter = require("./routes/costumerRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/suppliers", supplierRouter);
app.use("/api/costumers", costumerRouter);

// Connect to MongoDB
connectDB();

// Server Port
app.listen(config.port, () =>
  console.log(`Server listening on port ${config.port}`)
);
