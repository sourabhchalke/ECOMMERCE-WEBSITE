const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) => {
    let token = req.headers.authorization;

    console.log("Received Token:", token); // Debugging

    if (!token) {
        return res.status(403).json({ error: "Access denied. No token provided." });
    }

    // Handle "Bearer <token>" format
    if (token.startsWith("Bearer ")) {
        token = token.slice(7, token.length).trim();
    }

    console.log("Extracted Token:", token); // Debugging

    if (!process.env.SECRET_KEY) {
        console.error("SECRET_KEY is missing in environment variables.");
        return res.status(500).json({ error: "Internal Server Error" });
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            console.error("Token Verification Error:", err.message);
            return res.status(401).json({ error: "Unauthorized. Invalid or expired token." });
        }

        console.log("Decoded Token:", decoded); // Debugging
        req.user = decoded;
        next();
    });
};

module.exports = { verifyToken };
