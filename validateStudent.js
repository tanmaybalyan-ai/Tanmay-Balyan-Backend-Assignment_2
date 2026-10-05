const validateStudent = (req, res, next) => {
    const { name, age, course, email } = req.body;

    if (!name || !age || !course || !email) {
        const error = new Error(
            "Missing required fields. Name, age, course and email are required."
        );
        error.statusCode = 400;
        return next(error);
    }

    if (typeof name !== "string") {
        const error = new Error("Name must be a string.");
        error.statusCode = 400;
        return next(error);
    }

    if (Number.isNaN(Number(age)) || Number(age) <= 0) {
        const error = new Error("Age must be a valid positive number.");
        error.statusCode = 400;
        return next(error);
    }

    if (typeof course !== "string") {
        const error = new Error("Course must be a string.");
        error.statusCode = 400;
        return next(error);
    }

    if (typeof email !== "string" || !email.includes("@")) {
        const error = new Error("Please provide a valid email address.");
        error.statusCode = 400;
        return next(error);
    }

    next();
};

module.exports = validateStudent;
