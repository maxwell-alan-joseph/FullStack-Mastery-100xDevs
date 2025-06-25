import express from "express";
import authRoutes from "./routes/auth.js";

const app = express();
app.use(express.json());

// Routes
app.use("/", authRoutes);

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
