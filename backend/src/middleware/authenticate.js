const jwt = require('jsonwebtoken'); // Pastikan Anda sudah menginstal jsonwebtoken

const authenticate = (req, res, next) => {
    const token = req.headers['authorization'];

    if (token) {
        // Verifikasi token (contoh menggunakan JWT)
        jwt.verify(token, 'secretkey', (err, decoded) => {
            if (err) {
                return res.status(401).send({ message: 'Unauthorized' });
            }
            req.user = decoded;
            next();
        });
    } else {
        return res.status(401).send({ message: 'No token provided' });
    }
};

module.exports = authenticate;
