const logRequest = (req, res, next) => {
    console.log('Log Req: ', req.path);
    next();
}

module.exports = logRequest;