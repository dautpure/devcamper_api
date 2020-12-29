const express = require('express');
const dotenv = require('dotenv');

//load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

//Routes
app.get('/api/v1/bootcamps', (req, res) => {
    res.status(400).json({ success: true, msg: 'show all bootcamps' });
});
app.get('/api/v1/bootcamps/:id', (req, res) => {
    res.status(400).json({ success: true, msg: `Show data for bootcamp ${req.params.id} .` });
});
app.post('/api/v1/bootcamps', (req, res) => {
    res.status(400).json({ success: true, msg: 'create bootcamp' });
});
app.put('/api/v1/bootcamps/:id', (req, res) => {
    res.status(400).json({ success: true, msg: `The bootcamp ${req.params.id} updated` });
});
app.delete('/api/v1/bootcamps/:id', (req, res) => {
    res.status(400).json({ success: true, msg: `Bootcamp ${req.params.id} deleted` });
});






const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});