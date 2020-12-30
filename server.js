const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
const morgan = require('morgan');
const connectDB = require('./config/db');

//load env vars
dotenv.config({ path: './config/config.env' });

//Connect to DB
connectDB();

//Bringing Route Files
const bootcamps = require('./routes/bootcamps');

const app = express();

//dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}



//Mount router
app.use('/api/v1/bootcamps', bootcamps);



const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error : ${err.message}`);
    server.close(() => process.exit(1));
});