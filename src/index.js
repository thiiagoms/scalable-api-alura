const express = require('express');
const router = require('./routes/router');

const app = express();

router(app);

module.exports = app;
