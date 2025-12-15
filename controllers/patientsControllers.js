import Patient from "../models/Patient.js";
import { successResponse, errorResponse } from "../helpers/responseHelper.js";


// Get all patients
export const getPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    // inen is handler para haligot la an pag sesend hin success response
    return successResponse(res, 200, "Patients retrieved successfully", patients);
  } catch (error) {
    //same adi pag pa haligot la an response pag may error
    return errorResponse(res, 500, "Failed to fetch patients", error);
  }
};

// Create new patient
export const createPatient = async (req, res) => {
  try {
    // pag extract han data tikang ha request body
    const { name, age, complaint} = req.body;

    if (!name || !age || !complaint) {
      errorResponse(res, 400, "All patients fields are required");
      return;
    }

    const newpatient = await Patient.create({name, age, complaint});
    return successResponse(res, 200, "Patient added to queue", Patient);
  } catch (error) {
    return errorResponse(res, 500, "Failed to create patient", error);
  }
};

// Update patient
export const updatePatient = async (req, res) => {
  try {
    // pag extract han patient ID tikang ha request parameters
    const { id } = req.params;
    // pag extract han updated data tikang ha request body
    const { name, age, complaint, queue_status } = req.body;

    const patient = await Patient.findByIdAndUpdate(id, {
       name, age, complaint, queue_status }, { new: true });

    if (!patient) {
      return res.status(404).json(res, 404, "Patient not found");
    }
    return successResponse(res, 200, "Patient updated successfully", patient);
  } catch (error) {
    return errorResponse(res, 500,  "Failed to update patient", error);
  }
};

// Delete patient
export const deletePatient = async (req, res) => {
  try {
    // pag extract han patient ID tikang ha request query parameters
    const { id } = req.query;
    if (!id) {
      errorResponse(res, 400, "Patient ID is required");
      return;
    }

    const patient = await Patient.findByIdAndDelete(id);

    if (!patient) {
      return res.status(404).json(res, 404, "Patient not found");
    }

    return successResponse(res, 200, "Patient removed from queue");
  } catch (error) {
    return errorResponse(res, 500, "Failed to delete patient", error);
  }
};
