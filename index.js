const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', './views');

// MongoDB connection
const uri = process.env.MONGODB_URI;
let db;

async function connectToMongoDB() {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    db = client.db('taskmanager');
    console.log('Connected to MongoDB!');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
}

// Routes
app.get('/', async (req, res) => {
  try {
    const tasks = await db.collection('tasks').find({}).toArray();
    res.render('index', { tasks });
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.render('index', { tasks: [] });
  }
});

// Add new task
app.post('/tasks', async (req, res) => {
  try {
    const { title, priority } = req.body;
    
    if (!title || title.trim() === '') {
      return res.status(400).json({ 
        success: false, 
        message: 'Task title cannot be empty!' 
      });
    }

    const newTask = {
      title: title.trim(),
      priority: priority || 'low',
      createdAt: new Date(),
      completed: false
    };

    const result = await db.collection('tasks').insertOne(newTask);
    newTask._id = result.insertedId;
    
    res.status(201).json({ 
      success: true, 
      message: 'Task added successfully!',
      task: newTask
    });
  } catch (error) {
    console.error('Error adding task:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error adding task!' 
    });
  }
});

// Update task
app.put('/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, priority } = req.body;
    
    if (!title || title.trim() === '') {
      return res.status(400).json({ 
        success: false, 
        message: 'Task title cannot be empty!' 
      });
    }

    const { ObjectId } = require('mongodb');
    const result = await db.collection('tasks').updateOne(
      { _id: new ObjectId(id) },
      { 
        $set: { 
          title: title.trim(), 
          priority: priority || 'low',
          updatedAt: new Date()
        } 
      }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ 
        success: false, 
        message: 'Task not found!' 
      });
    }

    res.json({ 
      success: true, 
      message: 'Task updated successfully!' 
    });
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error updating task!' 
    });
  }
});

// Toggle task completion
app.patch('/tasks/:id/toggle', async (req, res) => {
  try {
    const { id } = req.params;
    const { ObjectId } = require('mongodb');
    
    // Get current task to toggle completion status
    const task = await db.collection('tasks').findOne({ _id: new ObjectId(id) });
    
    if (!task) {
      return res.status(404).json({ 
        success: false, 
        message: 'Task not found!' 
      });
    }

    const result = await db.collection('tasks').updateOne(
      { _id: new ObjectId(id) },
      { 
        $set: { 
          completed: !task.completed,
          updatedAt: new Date()
        } 
      }
    );

    res.json({ 
      success: true, 
      message: task.completed ? 'Task marked as incomplete!' : 'Task marked as complete!',
      completed: !task.completed
    });
  } catch (error) {
    console.error('Error toggling task:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error updating task!' 
    });
  }
});

// Delete task
app.delete('/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { ObjectId } = require('mongodb');
    
    const result = await db.collection('tasks').deleteOne({ 
      _id: new ObjectId(id) 
    });

    if (result.deletedCount === 0) {
      return res.status(404).json({ 
        success: false, 
        message: 'Task not found!' 
      });
    }

    res.json({ 
      success: true, 
      message: 'Task deleted successfully!' 
    });
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error deleting task!' 
    });
  }
});

// Start server
async function startServer() {
  await connectToMongoDB();
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

startServer();