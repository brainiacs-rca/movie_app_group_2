const cors = require('cors');

module.exports = () => {
    return function(req, res, next) {
        let options = {
            origin: req.headers.origin,
        }
        cors(options);
        res.header('Access-Control-Allow-Origin',req.headers.origin);
        res.header('Access-Control-Allow-Methods','');
        res.header('Access-Control-Allow-Credentials',true);
        next();
    }
}