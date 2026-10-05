const express = require("express");

const router = express.Router();

const {
    getAllStudents,
    getStudentById,
    addStudent,
    updateStudent,
    deleteStudent
} = require("../controllers/studentController");

const validateStudent = require("../middleware/validateStudent");

router.get("/", getAllStudents);
router.get("/:id", getStudentById);
router.post("/", validateStudent, addStudent);
router.put("/:id", validateStudent, updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;
