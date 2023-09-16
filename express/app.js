const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const { MongoClient } = require('mongodb');
const connectionString = 'mongodb://localhost:27017/CraftWillsTest'; // Replace with your connection string
const client = new MongoClient(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToMongo() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}



const indexRouter = require('./index'); // cannot use import because in index we dont have export so cannot
// Load environment variables from a .env file
dotenv.config();

// Create an instance of Express
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // pass user cookies

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGO_URI, { // this means go to the env file to put the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection; // connect to database
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
const userRoute = require('./routes/userRoute');
app.use('/api/users', userRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({ error: message });
});

module.exports = app;
