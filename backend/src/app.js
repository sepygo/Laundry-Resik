require('dotenv').config(); // Tambahkan ini di bagian atas file
const express = require('express');
const app = express();
// const config = require('./config/config'); // Tidak diperlukan lagi
const db = require('./db');

const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const cors = require('./middleware/cors');

app.use(express.json());
app.use(cors);
app.use(logger);

// app.use(authenticate);

const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const orderRoutes = require('./routes/orderRoutes');
const orderItemRoutes = require('./routes/orderItemRoutes');
const authRoutes = require('./routes/authRoutes');

app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/order-items', orderItemRoutes);
app.use('/api/auth', authRoutes);

app.use(express.static('public'));

// Testing
app.get('/', (req, res) => {
    res.send('Welcome to Laundry Management API');
});

app.get('/api/users', (req, res) => {
    res.send('This is the Users API');
});

app.get('/api/categories', (req, res) => {
    res.send('This is the Categories API');
});

app.get('/api/services', (req, res) => {
    res.send('This is the Services API');
});

app.get('/api/orders', (req, res) => {
    res.send('This is the Orders API');
});

app.get('/api/order-items', (req, res) => {
    res.send('This is the Order Items API');
});

app.use(errorHandler);

const PORT = process.env.PORT || 3100; // Ambil nilai dari variabel lingkungan
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
