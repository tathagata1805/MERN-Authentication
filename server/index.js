require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

// MONGODB CONNECTION
connection();

// EXPRESS MIDDLEWARES
app.use(express.json());
app.use(cors());

// ROUTES
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is listening on Port: ${PORT}`));