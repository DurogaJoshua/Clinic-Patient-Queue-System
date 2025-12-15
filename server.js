import express from "express";
import dotenv from "dotenv";
import patientRoutes from "./routes/patientRoutes.js";
import connectDB from "./config/database.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

//pag connect ha database
connectDB();

// middleware para mag parse hin JSON requests meaning pirme JSON an body han request
app.use(express.json());
app.use("/api/patients", patientRoutes);


app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);

