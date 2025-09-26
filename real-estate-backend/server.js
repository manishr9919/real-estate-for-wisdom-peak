import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

import propertyRoutes from "./src/routes/properties.routes.js";
import connectDB from "./src/config/db.js";
import notFound from "./src/middlewares/notFound.js";
import errorHandler from "./src/middlewares/errorHandler.js";

dotenv.config();
const app = express();

// 🔹 Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// 🔹 Routes
app.use("/properties", propertyRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("🏠 Real Estate Backend API is running 🚀");
});

// 🔹 404 + Error Handlers
app.use(notFound);
app.use(errorHandler);

// 🔹 Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  if (process.env.DATA_SOURCE === "mongo") {
    await connectDB();
  }
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
