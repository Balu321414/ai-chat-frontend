# Simple AI Chat Application
AI chat application interface as frontend built with React and a backend service using Nest.js.

#  How to Setup and run the application
use node version v18.17.0,npm version 9.6.7

Clone this Project

Run npm install in both folders to install all their dependencies

Start both servers(Client and Server)

# Set Up Frontend 
# Install dependies as follows 
npx create-react-app ai-chat-frontend --template typescript
cd ai-chat-frontend
npm install axios

# Set Up Frontend 
# Install dependies as follows 
npm install -g @nestjs/cli
nest new ai-chat-backend
cd ai-chat-backend
npm install

# Integration
Connect the frontend and backend 
# Run the Frontend
npm start in frontend
# Run the Backend
npm run start:dev in backend

# Additional Steps:
CORS Configuration:
Add CORS configuration in your Nest.js backend (main.ts). Make sure CORS is enabled:
