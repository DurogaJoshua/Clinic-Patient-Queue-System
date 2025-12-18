# Group 5 — “Clinic Patient Queue System”

## Members:
- Cañezares, Joebert Gempis
- Duroga, Joshua Rota
- Enriquez, Joshua Sevilla
- Genoguin, Romulo Paragatos

**Clinic Patient Queue System – Express.js Backend**

The Clinic Patient Queue System is a RESTful API used to manage patients in a clinic queue using **Express.js**, **MVC architecture**, and a **MongoDB** database. This system helps register patients, manage their queue status (waiting, serving, completed), and update patient information efficiently.

---

## **Features**

* CRUD operations for patients (Create, Read, Update, Delete)
* Patient Queue Management (waiting, serving, completed)
* MVC architecture (Models, Controllers, Routes)
* MongoDB database integration
* Input validation and error handling
* Clean JSON responses
* Mongoose for database operations

---

## **Tech Stack**

* **express** – Web framework
* **mongoose** – MongoDB object modeling
* **dotenv** – Environment variable management
* **nodemon** – Development auto-reload

---

## **Project Structure**

```
├── models/
│   ├── patients.js             # Predefined patient data (for testing)
│   └── Patient.js              # Mongoose schema for patients
├── controllers/
│   └── patientsController.js   # Business logic and queue operations
├── routes/
│   └── patientRoutes.js        # API endpoints
├── helpers/
│   └── responseHelper.js       # Response utilities
├── config/
│   └── database.js             # MongoDB connection setup
├── server.js                   # Entry point
└── .env                        # Environment variables
```

---

## **Installation**

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```
3. Create a `.env` file:

   ```env
  PORT=3000
NODE_ENV=development
MONGODB_URI=mongodb+srv://clinicdb:g5cpqs@clinicdb.rucvnna.mongodb.net/
   ```
4. Start the MongoDB server
5. Start the application:

   ```bash
   npm start
   ```

---

## **API Endpoints**

### **Get All Patients**

**GET /api/patients**
Returns all patients from the database including their queue status.

---

### **Register a New Patient**

**POST /api/patients**

Request body:

```json
{
  "name": "Romulo Genoguin",
  "age": 30,
  "complaint": "Fever and cough",
  "queue_status": "waiting"
}
```

---

### **Update a Patient**

**PUT /api/patients/:id**

Request body (partial updates allowed):

```json
{
  "queue_status": "serving"
}
```

---

### **Delete a Patient**

**DELETE /api/patients?id={patientId}**
Deletes a patient based on the ID using a query parameter.

---

## **Response Format**

All responses follow this structure:

### **Success**

```json
{
  "success": true,
  "message": "Operation successful",
  "data": { }
}
```

### **Error**

```json
{
  "success": false,
  "message": "Error description",
  "error": { }
}
```

---

## **Development Notes**

* The application uses MongoDB for persistent storage
* All operations are asynchronous due to database interactions
* The Mongoose schema validates data before saving
* Try-catch blocks are used for proper error handling
* Queue status values: **waiting**, **serving**, **completed**

---

## **Important Reminders**

* **name**, **age**, and **complaint** are required when registering a patient
* Update operations support partial updates
* The system checks if the patient exists in the database
* MongoDB IDs are automatically generated
