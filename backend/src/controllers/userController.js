const User = require('../models/userModel');

// Mendapatkan semua pengguna
exports.getAllUsers = (req, res) => {
    User.getAllUsers((err, users) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).json(users);
    });
};

// Mendapatkan pengguna berdasarkan ID
exports.getUserById = (req, res) => {
    const id = req.params.id;
    User.getUserById(id, (err, user) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        res.status(200).json(user);
    });
};

// Membuat pengguna baru
exports.createUser = (req, res) => {
    const newUser = req.body;
    User.createUser(newUser, (err, user) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).json(user);
    });
};

// Memperbarui pengguna
exports.updateUser = (req, res) => {
    const id = req.params.id;
    const updatedUser = req.body;
    User.updateUser(id, updatedUser, (err) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send({ message: 'User updated successfully' });
    });
};

// Menghapus pengguna
exports.deleteUser = (req, res) => {
    const id = req.params.id;
    User.deleteUser(id, (err) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send({ message: 'User deleted successfully' });
    });
};
