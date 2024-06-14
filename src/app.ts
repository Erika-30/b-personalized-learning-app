import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Rutas
app.use("/api/auth", authRoutes);
app.use("/api/upload", uploadRoutes);

// Ruta de prueba
app.get("/", (_req, res) => {
  res.send("Backend is running");
});

export default app;
