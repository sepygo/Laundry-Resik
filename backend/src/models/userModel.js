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
exports.createUser = async (user, callback) => {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const query = 'INSERT INTO users (username, password, email, role) VALUES (?, ?, ?, ?)';
    db.query(query, [user.username, hashedPassword, user.email, user.role], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, { id: results.insertId, ...user });
    });
};

// Memperbarui pengguna
exports.updateUser = (id, user, callback) => {
    const query = 'UPDATE users SET username = ?, email = ?, role = ? WHERE id = ?';
    db.query(query, [user.username, user.email, user.role, id], (err, results) => {
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