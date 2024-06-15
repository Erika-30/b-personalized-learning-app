import express from "express";
import {
  getParents,
  getParentById,
  createParent,
  updateParent,
  deleteParent,
} from "../controllers/parentController";

const router = express.Router();

// Rutas para manejo de padres
router.get("/", getParents);
router.get("/:id", getParentById);
router.post("/", createParent);
router.put("/:id", updateParent);
router.delete("/:id", deleteParent);

export default router;
