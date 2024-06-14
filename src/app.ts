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
app.use("/api/students", studentRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/parents", parentRoutes);
app.use("/api/evaluations", evaluationRoutes);
app.use("/api/lessons", lessonRoutes);

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Backend is running");
});

export default app;
