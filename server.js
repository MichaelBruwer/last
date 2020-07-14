const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect database
connectDB();

app.get('/', (req, res) => res.json({ msg: 'Welcome to the Rateing app' }));

//Define Routes
app.use('/api/users'), require('./routes/users');
app.use('/api/companys'), require('./routes/companys');
app.use('/api/auth'), require('./routes/auth');

const PORT = process.env.PORT || 5000;

app.listhen(PORT, () => console.log(`Server started on port ${PORT}`));
