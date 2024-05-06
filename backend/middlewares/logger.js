function logRequest(req, res, next) {
    console.log(`Request made on: ${req.url}`);
    console.log("Request Body:");
    console.log(req.body || "Empty");
    console.log("Request Cookies:")
    console.log(req.cookies)

    next();
}

module.exports = logRequest;