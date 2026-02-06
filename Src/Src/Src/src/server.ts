import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import paymentRouter from "./routes/payment";

dotenv.config();

const app = express();

// Middleware for security, logging, and parsing
app.use(cors());               // Allow requests from any origin
app.use(helmet());             // Secure HTTP headers
app.use(morgan("dev"));        // Log HTTP requests for debugging
app.use(express.json());       // Automatically parse JSON bodies

// API routes
app.use("/api", paymentRouter);

// Health check endpoint
app.get("/", (_req, res) => {
  res.send("FlowPay Gateway is running 🚀");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`FlowPay Gateway is running 🚀 on port ${PORT}`);
});
