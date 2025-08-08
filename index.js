import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public")); // Serve yung HTML, CSS, JS

// API routes mo dito...
app.get("/api/test", (req, res) => {
  res.json({ message: "QR Attendance Backend API is working 🚀" });
});

// Start server
app.listen(PORT, () => {
  console.log(`QR Attendance Backend is running 🚀 on http://localhost:${PORT}`);
});
