const db = require('../db');

// Mendapatkan semua layanan
exports.getAllServices = (callback) => {
    const query = `
        SELECT services.id, services.name, services.description, services.price, services.unit, services.category_id, categories.name AS category_name
        FROM services
        JOIN categories ON services.category_id = categories.id
    `;
    db.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

// Mendapatkan layanan berdasarkan ID
exports.getServiceById = (id, callback) => {
    const query = `
        SELECT services.id, services.name, services.description, services.price, services.unit, services.category_id, categories.name AS category_name
        FROM services
        JOIN categories ON services.category_id = categories.id
        WHERE services.id = ?
    `;
    db.query(query, [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results[0]);
    });
};

// Membuat layanan baru
exports.createService = (service, callback) => {
    const query = 'INSERT INTO services (name, description, price, unit, category_id) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [service.name, service.description, service.price, service.unit, service.category_id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, { id: results.insertId, ...service });
    });
};

// Memperbarui layanan
exports.updateService = (id, service, callback) => {
    const query = 'UPDATE services SET name = ?, description = ?, price = ?, unit = ?, category_id = ? WHERE id = ?';
    db.query(query, [service.name, service.description, service.price, service.unit, service.category_id, id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

// Menghapus layanan
exports.deleteService = (id, callback) => {
    const query = 'DELETE FROM services WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};
