const express = require("express");

const studentRoutes = require("./routes/studentRoutes");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Student Management REST API is running"
    });
});

app.use("/api/students", studentRoutes);

app.use((req, res, next) => {
    const error = new Error(`Route not found: ${req.method} ${req.originalUrl}`);
    error.statusCode = 404;
    next(error);
});

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
