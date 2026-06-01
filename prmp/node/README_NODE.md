# Node Notification Service

This is a simple Node.js + Socket.IO service used to send real-time notifications to the React frontend based on user roles (admin, manager, developer).

## How to Run

1. Install dependencies:
   npm install

2. Start the server:
   node server.js

The server runs on: http://localhost:4000

## Roles

The frontend must join one of these rooms:
- admin
- manager
- developer

Example:
socket.emit("joinRoom", "admin");

## Notification Endpoints

POST /notify/taskAssigned  
POST /notify/taskStatusUpdated  
POST /notify/predictionGenerated  
POST /notify/sprintDeadlineAlert  
POST /notify/managerFeedbackAdded  

Each endpoint sends a Socket.IO event to the correct role.

## Folder Structure

prmp/node/
- server.js
- routes/notifyRoutes.js
- utils/logger.js
- package.json

## Purpose

This service sends real-time notifications to the React dashboard based on user roles.
