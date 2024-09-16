import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet()); // Adds various HTTP headers for security
app.use(morgan("dev")); // Logging middleware
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies
app.use(cors()); // Enable CORS for all routes
app.set("json spaces", 2); // Formmated Json Responce

const limiter = rateLimit({
   windowMs: 15 * 60 * 1000, // 15 minutes
   max: 100, // Limit each IP to 100 requests per windowMs
});
app.use(limiter);

app.use(express.static(path.join(__dirname, "public")));

import { RunTime } from "./src/runtime.js";

/**
 * Routes
 */
app.get("/api/hello", (req, res) => {
   res.json({ message: "Hello, World!" });
});

app.get("/api/runtime", (req, res) => {
   const runtime = RunTime();
   res.json({ runtime: `${runtime} seconds` });
});

/**
 * Errors Handling
 */
app.use((err, req, res, next) => {
   console.error(err.stack);
   res.status(500).json({ error: "Something went wrong!" });
});

app.use((req, res) => {
   res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
});
