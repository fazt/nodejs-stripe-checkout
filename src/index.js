import express from "express";
import path from "path";
import { PORT } from "./config.js";
import indexRoutes from "./routes/payment.routes.js";

// Initializations
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use(indexRoutes);

// Static files
app.use(express.static(path.resolve("src/public")));

// Start Server
app.listen(PORT);
console.log("Server on port", PORT);
