const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../model/user.model.js');

const generateToken = (user) => {
    return jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    );
};

const sanitizeUser = (user) => ({
    _id: user._id,
    name: user.name,
    email: user.email,
});

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: 'Password must be at least 6 characters' });
        }

        const normalizedEmail = email.trim().toLowerCase();
        const existingUser = await User.findOne({ email: normalizedEmail });
        if (existingUser) {
            return res.status(400).json({ message: 'User already registered' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name: name.trim(),
            email: normalizedEmail,
            password: hashedPassword,
        });

        await newUser.save();

        const userData = sanitizeUser(newUser);
        const token = generateToken(newUser);

        res.status(201).json({
            message: 'User created successfully',
            token,
            user: userData,
        });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const normalizedEmail = email.trim().toLowerCase();
        const user = await User.findOne({ email: normalizedEmail });

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = generateToken(user);

        res.status(200).json({
            message: 'Login successful',
            token,
            user: sanitizeUser(user),
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getCurrentUser = async (req, res) => {
    try {
        return res.status(200).json({ user: sanitizeUser(req.user) });
    } catch (error) {
        return res.status(500).json({ message: 'Failed to fetch current user' });
    }
};

module.exports = { signup, login, getCurrentUser };
