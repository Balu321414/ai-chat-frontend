
# Simple AI Chat Application
AI chat application interface as frontend built with React and a backend service using Nest.js.

#  How to Setup and run the application
use node version v18.17.0,npm version 9.6.7

Clone this Project

Run npm install in both folders to install all their dependencies

Start both servers(Frontend and Backend)

# Set Up Frontend 
# Install dependies as follows 
1.npx create-react-app ai-chat-frontend --template typescript
2.cd ai-chat-frontend
3.npm install axios

# Set Up Backend 
# Install dependies as follows 
1.npm install -g @nestjs/cli
2.nest new ai-chat-backend
3.cd ai-chat-backend
4.npm install

# Integration
Connect the frontend and backend 
# Run the Frontend
npm start in frontend
# Run the Backend
npm run start:dev in backend

# Additional Steps:
CORS Configuration:
Add CORS configuration in your Nest.js backend (main.ts). Make sure CORS is enabled:
