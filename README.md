# Polling System with REST API in Node.js

This is a simple polling system implemented using Node.js with Express framework to handle RESTful API requests. The system allows users to create, retrieve, update, and delete questions and options for polling. However, options can only be deleted if they have not been voted on.

## Features

- Create, retrieve, update, and delete questions
- Create, retrieve, update, and delete options for questions
- Vote for options
- Prevent deletion of options if they have been voted on

## Prerequisites

- Node.js installed on your machine
- npm (Node Package Manager) installed

## Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
Navigate to the project directory:

cd polling-system-nodejs

Install dependencies
npm install

Use API endpoints to interact with the polling system. You can use tools like Postman or curl to make requests.

Example API endpoints:

GET /questions: Get all questions
POST /questions: Create a new question
GET /questions/:questionId: Get a specific question
PUT /questions/:questionId: Update a question
DELETE /questions/:questionId: Delete a question
GET /questions/:questionId/options: Get all options for a question
POST /questions/:questionId/options: Create a new option for a question
GET /questions/:questionId/options/:optionId: Get a specific option for a question
PUT /questions/:questionId/options/:optionId: Update an option for a question
DELETE /questions/:questionId/options/:optionId: Delete an option for a question
Contributing
Contributions are welcome! If you find any bugs or want to suggest enhancements, please open an issue or create a pull request.
