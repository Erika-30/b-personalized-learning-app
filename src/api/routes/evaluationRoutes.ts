import express from "express";
import {
  getEvaluations,
  getEvaluationById,
  createEvaluation,
  updateEvaluation,
  deleteEvaluation,
} from "../controllers/evaluationController";

const router = express.Router();

// Rutas para manejo de evaluaciones
router.get("/", getEvaluations);
router.get("/:id", getEvaluationById);
router.post("/", createEvaluation);
router.put("/:id", updateEvaluation);
router.delete("/:id", deleteEvaluation);

export default router;
