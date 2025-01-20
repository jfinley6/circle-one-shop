const express = require("express");
const app = express();

app.use(express.json())

// Import all routes
const discs = require('./routes/discs')

app.use('/api/v1', discs)

module.exports = app
