const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

//Connect database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.json({ msg: 'Welcome to the Rateing app Api' }));

//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/companys', require('./routes/companys'));
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
