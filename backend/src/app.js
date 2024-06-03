const express = require('express');
const app = express();
const config = require('./config');
const bodyParser = require('body-parser');

// Middleware
app.use(bodyParser.json());

// Routes
const laundryRoutes = require('./routes/laundry');
app.use('/api/laundry', laundryRoutes);

// Error Handling
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

// Server
const PORT = config.port || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
