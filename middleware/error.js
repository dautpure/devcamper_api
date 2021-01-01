const errorHandler = (err, req, res, next) => {
    console.log(err.stack);

    //Mongoose object not found 
    if (err.name === 'CastError') {
        const message = `Resource not found with id of ${err.value}`;
    }

    console.log(err.name);
    res.status(err.statusCode || 500).json({
        success: false,
        error: err.message || 'Server Error'
    });
};
module.exports = errorHandler;