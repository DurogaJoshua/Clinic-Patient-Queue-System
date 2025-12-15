import express from "express";
import {
  getPatients,
  createPatient,
  updatePatient,
  deletePatient
} from "../controllers/patientsControllers.js";

const router = express.Router();

router.get("/", getPatients);
router.post("/", createPatient);
// pag add han delete route pero gamiton an query parameter para ha ID
router.put("/:id", updatePatient);
router.delete("/", deletePatient);

export default router;
