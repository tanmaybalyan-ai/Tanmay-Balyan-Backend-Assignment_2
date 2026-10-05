let students = [
    {
        id: 1,
        name: "Rahul Sharma",
        age: 20,
        course: "BCA",
        email: "rahul@example.com"
    },
    {
        id: 2,
        name: "Priya Singh",
        age: 21,
        course: "B.Tech",
        email: "priya@example.com"
    },
    {
        id: 3,
        name: "Aman Verma",
        age: 19,
        course: "BSc",
        email: "aman@example.com"
    }
];

exports.getAllStudents = (req, res) => {
    res.status(200).json({
        success: true,
        count: students.length,
        data: students
    });
};

exports.getStudentById = (req, res, next) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
        const error = new Error("Invalid student ID. ID must be a number.");
        error.statusCode = 400;
        return next(error);
    }

    const student = students.find(student => student.id === id);

    if (!student) {
        const error = new Error(`Student with ID ${id} not found.`);
        error.statusCode = 404;
        return next(error);
    }

    res.status(200).json({
        success: true,
        data: student
    });
};

exports.addStudent = (req, res) => {
    const { name, age, course, email } = req.body;

    const newStudent = {
        id: students.length > 0
            ? Math.max(...students.map(student => student.id)) + 1
            : 1,
        name,
        age: Number(age),
        course,
        email
    };

    students.push(newStudent);

    res.status(201).json({
        success: true,
        message: "Student added successfully",
        data: newStudent
    });
};

exports.updateStudent = (req, res, next) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
        const error = new Error("Invalid student ID. ID must be a number.");
        error.statusCode = 400;
        return next(error);
    }

    const studentIndex = students.findIndex(student => student.id === id);

    if (studentIndex === -1) {
        const error = new Error(`Student with ID ${id} not found.`);
        error.statusCode = 404;
        return next(error);
    }

    const { name, age, course, email } = req.body;

    students[studentIndex] = {
        id,
        name,
        age: Number(age),
        course,
        email
    };

    res.status(200).json({
        success: true,
        message: "Student updated successfully",
        data: students[studentIndex]
    });
};

exports.deleteStudent = (req, res, next) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
        const error = new Error("Invalid student ID. ID must be a number.");
        error.statusCode = 400;
        return next(error);
    }

    const studentIndex = students.findIndex(student => student.id === id);

    if (studentIndex === -1) {
        const error = new Error(`Student with ID ${id} not found.`);
        error.statusCode = 404;
        return next(error);
    }

    const deletedStudent = students.splice(studentIndex, 1);

    res.status(200).json({
        success: true,
        message: "Student deleted successfully",
        data: deletedStudent[0]
    });
};
