const jwt = require("jsonwebtoken");
require('dotenv').config();


const auth = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Bearer kısmını çıkarıyor

    if (!token) {
        return res.status(401).json({ message: "Token bulunamadı." });
    }

    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Geçersiz token." });
    }
};

module.exports = auth;
