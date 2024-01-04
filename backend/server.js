const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// MongoDB connection
mongoose.connect('mongodb://your-mongodb-uri', { useNewUrlParser: true, useUnifiedTopology: true });

// Passport Configuration
require('./config/passport')(passport);

// Routes
const authRoutes = require('./routes/authRoutes');
const gymRoutes = require('./routes/gymRoutes');
app.use('/api/auth', authRoutes);
app.use('/api/gym', gymRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

