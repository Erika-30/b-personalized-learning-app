import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import authRoutes from "./api/routes/authRoutes";
import uploadRoutes from "./api/routes/uploadRoutes";
import studentRoutes from "./api/routes/studentRoutes";
import teacherRoutes from "./api/routes/teacherRoutes";
import parentRoutes from "./api/routes/parentRoutes";
import evaluationRoutes from "./api/routes/evaluationRoutes";
import lessonRoutes from "./api/routes/lessonRoutes";

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
