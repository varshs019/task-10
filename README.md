# 📋 Task Manager Application

A modern, full-stack task management application built with **Node.js**, **Express.js**, **EJS templating**, and **MongoDB Atlas**. This application provides an intuitive interface for managing tasks with priority levels, completion tracking, and real-time updates.

## 🚀 Live Demo

**Deployed on Render:** [Task Manager App](https://task-manager-app-varshitha.onrender.com)

**GitHub Repository:** [Task Manager App](https://github.com/varshs019/task-10.git)

## ✨ Features

### Core Functionality
- ✅ **Task Creation**: Add new tasks with title and priority levels
- ✅ **Task Editing**: Modify existing tasks with pencil icon
- ✅ **Task Deletion**: Remove tasks individually with trash icon
- ✅ **Completion Tracking**: Mark tasks as complete with checkboxes and strike-through
- ✅ **Priority Management**: Set tasks as Low, High, or Urgent priority

### User Experience
- 🎨 **Modern UI**: Beautiful gradient design with responsive layout
- 📱 **Mobile Responsive**: Works seamlessly on all devices
- ⚡ **Real-time Updates**: Dynamic interface updates without page refresh
- 🔔 **Smart Alerts**: Success and error notifications for all operations
- 🎯 **Form Validation**: Prevents empty task creation with user feedback

### Technical Features
- 🗄️ **MongoDB Integration**: Persistent data storage with MongoDB Atlas
- 🔄 **RESTful API**: Proper HTTP methods (GET, POST, PUT, DELETE, PATCH)
- 🎭 **EJS Templating**: Dynamic server-side rendering
- 🛡️ **Input Validation**: Server-side and client-side validation
- 📊 **Data Persistence**: All data stored securely in cloud database

## 🛠️ Technology Stack

- **Backend**: Node.js, Express.js
- **Frontend**: EJS, HTML5, CSS3, JavaScript (ES6+)
- **Database**: MongoDB Atlas
- **Styling**: Custom CSS with Font Awesome icons
- **Deployment**: Render

## 📋 Project Requirements Met

### User Interface
- ✅ Task Creation with validation (empty title shows alert)
- ✅ Task Editing with pencil icon (shows success alert)
- ✅ Task Deletion with trash icon (shows success alert)
- ✅ Form validation and user-friendly alerts
- ✅ Proper HTTP methods implementation

### Backend Functionality
- ✅ MongoDB Atlas database integration
- ✅ Dynamic EJS template updates
- ✅ RESTful API endpoints
- ✅ Data persistence and reliability

### Database Structure
- ✅ Collection: `tasks`
- ✅ Fields: `title`, `priority`, `completed`, `createdAt`, `updatedAt`

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/varshs019/task-10.git
   cd task-10
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Create a `.env` file in the root directory
   - Add your MongoDB Atlas connection string:
   ```
   MONGODB_URI=your_mongodb_atlas_connection_string
   PORT=3000
   ```

4. **Start the application**
   ```bash
   npm start
   ```

5. **Access the application**
   - Open your browser
   - Navigate to `http://localhost:3000`

## 🌐 Deployment on Render

### Step-by-Step Deployment Guide

1. **Prepare Your Code**
   - Ensure `index.js` is your main server file
   - Verify `package.json` has correct start script
   - Check all dependencies are listed

2. **Create Render Account**
   - Sign up at [render.com](https://render.com)
   - Connect your GitHub account

3. **Deploy on Render**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Configure settings:
     - **Name**: `task-manager-app`
     - **Environment**: `Node`
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
     - **Plan**: Free

4. **Environment Variables**
   - Add `MONGODB_URI` with your MongoDB Atlas connection string
   - Add `PORT` (Render will set this automatically)

5. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment to complete
   - Your app will be live at the provided URL

## 📁 Project Structure

```
task-manager-app/
├── index.js              # Main server file
├── package.json          # Dependencies and scripts
├── .env                  # Environment variables
├── README.md            # Project documentation
├── views/
│   └── index.ejs        # Main application template
└── public/              # Static files directory
```

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Display all tasks |
| POST | `/tasks` | Create new task |
| PUT | `/tasks/:id` | Update existing task |
| DELETE | `/tasks/:id` | Delete task |
| PATCH | `/tasks/:id/toggle` | Toggle task completion |

## 🎯 Features in Action

### Task Management
- **Add Tasks**: Enter title, select priority, click "Add Task"
- **Edit Tasks**: Click pencil icon, modify in modal, save changes
- **Delete Tasks**: Click trash icon, confirm deletion
- **Complete Tasks**: Check/uncheck checkbox for strike-through

### Priority Levels
- 🟢 **Low**: Green badge
- 🟠 **High**: Orange badge  
- 🔴 **Urgent**: Red badge

### Alerts & Validation
- ✅ Success alerts for all operations
- ❌ Error alerts for validation failures
- 🔄 Real-time feedback

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Varshitha**
- GitHub: [@varshs019](https://github.com/varshs019)
- LinkedIn: [@your-linkedin-profile]

## 🙏 Acknowledgments

- [Font Awesome](https://fontawesome.com/) for icons
- [MongoDB Atlas](https://www.mongodb.com/atlas) for database hosting
- [Render](https://render.com/) for deployment platform
- [Express.js](https://expressjs.com/) for the web framework

---

⭐ **Star this repository if you found it helpful!** 