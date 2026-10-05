# Student Management REST API

A RESTful backend application built using Node.js and Express.js for managing student records.

## Technologies Used

- Node.js
- Express.js
- JavaScript
- Postman / Thunder Client

## Installation

```bash
npm install
```

## Run

Development mode:

```bash
npm run dev
```

Normal mode:

```bash
npm start
```

Server:

http://localhost:5000

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/students | Get all students |
| GET | /api/students/:id | Get student by ID |
| POST | /api/students | Add student |
| PUT | /api/students/:id | Update student |
| DELETE | /api/students/:id | Delete student |

## Example POST/PUT JSON

```json
{
  "name": "Neha Gupta",
  "age": 22,
  "course": "MCA",
  "email": "neha@example.com"
}
```

## Features

- CRUD operations
- Custom request logger middleware
- Student validation middleware
- Centralized error handling
- JSON request/response
- Invalid ID handling
- Student-not-found handling
- Unsupported route handling
