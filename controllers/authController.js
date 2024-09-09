//login register
const User = require('../models/User');
const bcrypt = require('bcrypt');  //şifreleme algoritması
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Register
const register = async (req, res) => {
    try {
        const { full_name, mail, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ mail });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            full_name,
            mail,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(201).json({ message: 'Kayıt başarılı.' });
    } catch (error) {
        res.status(500).json({ message: 'Kayıt başarısız. Formu tamamen doldurun.' });
    }
};

// Login
const login = async (req, res) => {
    try {
        const { mail, password } = req.body;
        // Find user
        const user = await User.findOne({ mail });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Create JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        console.log(token)

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { register, login };
