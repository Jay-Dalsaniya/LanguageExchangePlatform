# Language Exchange Platform

## Overview

The Language Exchange Platform is a web-based application designed to help learners and teachers connect and share language learning resources. The platform allows users to sign up as either a learner or a teacher, and provides specific dashboards for each role. Teachers can add courses, and learners can browse and enroll in courses based on the languages they want to learn.

## Features

- User signup with role selection (Learner or Teacher)
- Separate dashboards for Learners and Teachers
- Course creation and management for Teachers
- Course browsing and enrollment for Learners
- Profile management for both Learners and Teachers
- RESTful API integration for data handling
- Secure user authentication and authorization

## Technology Stack

- Frontend: React.js, CSS, Bootstrap
- Backend: Node.js, Express.js, MongoDB
- Database: MongoDB
- Authentication: JWT (JSON Web Token)
- Version Control: Git and GitHub

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/language-exchange-platform.git
Navigate to the project directory:


cd language-exchange-platform
Install the required dependencies:


npm install
Set up the environment variables:

Create a .env file in the root directory and add the following:

env

MONGO_URI=mongodb://localhost:27017/languageExchangPplatform
JWT_SECRET=your_jwt_secret
Usage
Starting the Client
To start the client, run:


npm start
This will start the frontend of the application. Open your browser and navigate to http://localhost:3000 to access the application.

Starting the Server
To start the server, run:


node index.js
This will start the backend server on the specified port, usually http://localhost:5000.

Sign up as a Learner or Teacher.
Navigate through the dashboard based on your role.
Explore courses, create new courses, and manage your profile.
Contributing
Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request.

License
This project is licensed under the MIT License.

Contact
For any questions or suggestions, feel free to reach out:

Jay Dalsaniya - dalsaniyajay111@gmail.com