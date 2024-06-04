const db = require('../db');

// Mendapatkan semua kategori
exports.getAllCategories = (callback) => {
    const query = 'SELECT * FROM categories';
    db.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

// Mendapatkan kategori berdasarkan ID
exports.getCategoryById = (id, callback) => {
    const query = 'SELECT * FROM categories WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results[0]);
    });
};

// Membuat kategori baru
exports.createCategory = (category, callback) => {
    const query = 'INSERT INTO categories (name, description) VALUES (?, ?)';
    db.query(query, [category.name, category.description], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, { id: results.insertId, ...category });
    });
};

// Memperbarui kategori
exports.updateCategory = (id, category, callback) => {
    const query = 'UPDATE categories SET name = ?, description = ? WHERE id = ?';
    db.query(query, [category.name, category.description, id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

// Menghapus kategori
exports.deleteCategory = (id, callback) => {
    const query = 'DELETE FROM categories WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};
