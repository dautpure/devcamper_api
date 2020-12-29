const express = require('express');
const router = express.Router();

//Routes - Start
router.get('/', (req, res) => {
    res.status(200).json({ success: true, msg: 'show all bootcamps' });
});
router.get('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Show data for bootcamp ${req.params.id} .` });
});
router.post('/', (req, res) => {
    res.status(200).json({ success: true, msg: 'create bootcamp' });
});
router.put('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `The bootcamp ${req.params.id} updated` });
});
router.delete('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Bootcamp ${req.params.id} deleted` });
});
//Routes-End

module.exports = router;