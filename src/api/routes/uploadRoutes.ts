import express from "express";
import { uploadFile } from "../controllers/uploadController";

const router = express.Router();

// Ruta para cargar archivos
router.post("/upload", uploadFile);

export default router;
