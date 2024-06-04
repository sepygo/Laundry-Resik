const db = require('../db');

// Mendapatkan semua pengguna
exports.getAllUsers = (callback) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

// Mendapatkan pengguna berdasarkan ID
exports.getUserById = (id, callback) => {
    const query = 'SELECT * FROM users WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results[0]);
    });
};

// Membuat pengguna baru
exports.createUser = (user, callback) => {
    const query = 'INSERT INTO users (username, password, email, role) VALUES (?, ?, ?, ?)';
    db.query(query, [user.username, user.password, user.email, user.role], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, { id: results.insertId, ...user });
    });
};

// Memperbarui pengguna
exports.updateUser = (id, user, callback) => {
    const query = 'UPDATE users SET username = ?, password = ?, email = ?, role = ? WHERE id = ?';
    db.query(query, [user.username, user.password, user.email, user.role, id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

// Menghapus pengguna
exports.deleteUser = (id, callback) => {
    const query = 'DELETE FROM users WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};
