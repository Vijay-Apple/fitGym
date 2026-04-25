📌 Project Overview

The Gym Management System is a full-stack web application designed to streamline and automate gym operations. It helps gym administrators efficiently manage members, trainers, membership plans, and payments while also enabling communication between users.

This system reduces manual work, improves accuracy, and enhances overall productivity.

🚀 Features
🔐 User Authentication (Login / Register)
👤 Member Management
🧑‍🏫 Trainer Management
📋 Membership Plan Management
💳 Payment Tracking
💬 Real-time Chat System
📊 Admin Dashboard
🏗️ System Architecture

This project follows a Microservices Architecture for better scalability and maintainability.

Services:
Auth Service – Handles user authentication and authorization
User Service – Manages members and trainers
Chat Service – Enables communication between users
API Gateway – Routes requests to appropriate services
🛠️ Tech Stack
Frontend:
React.js
Redux
HTML5
CSS3
JavaScript
Backend:
Node.js
Express.js
Database:
MongoDB
DevOps & Tools:
Docker
Docker Compose
Render (Deployment)
🗄️ Database Design (MongoDB)

The system uses MongoDB with the following collections:

Users – Stores authentication details
Members – Stores member information
Trainers – Stores trainer details
Plans – Membership plans
Payments – Payment records
Messages – Chat messages
🔄 Workflow
User registers or logs in
Admin manages members and trainers
Members select membership plans
Payments are recorded and tracked
Users communicate via chat system
⚙️ Installation & Setup
Prerequisites:
Node.js
MongoDB
Docker (optional)
Steps:
# Navigate to project folder
cd gym-management-system


# Install dependencies
npm install


# Start the server
npm start
🌐 API Endpoints (Sample)
Auth:
POST /api/auth/register
POST /api/auth/login
Users:
GET /api/users
POST /api/users
Plans:
GET /api/plans
POST /api/plans
📈 Advantages
Reduces manual work
Improves data accuracy
Easy to use interface
Scalable architecture
Secure authentication system
🔮 Future Enhancements
Online payment integration
Mobile application
Attendance tracking system
Workout & diet plan management
Notification system
👨‍💻 Author

Vijay Rajput

📄 License

This project is for educational purposes.

🙌 Acknowledgements

Thanks to all the resources and tools that helped in building this project.
