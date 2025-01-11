const express = require('express');
const mongoose = require('./config/db');
const cors = require('cors');
const bodyParser = require('body-parser');
const authorRoutes = require('./routes/authors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/authors', authorRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
