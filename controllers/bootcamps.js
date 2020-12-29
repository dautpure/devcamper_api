exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'show all bootcamps' });
};


exports.getBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Show data for bootcamp ${req.params.id} .` });
};


exports.createBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'create bootcamp' });
};


exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `The bootcamp ${req.params.id} updated` });
};


exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Bootcamp ${req.params.id} deleted` });
};