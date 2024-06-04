const db = require('../db');

// Mendapatkan semua item pesanan
exports.getAllOrderItems = (callback) => {
    const query = 'SELECT * FROM order_items';
    db.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

// Mendapatkan item pesanan berdasarkan ID
exports.getOrderItemById = (id, callback) => {
    const query = 'SELECT * FROM order_items WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results[0]);
    });
};

// Membuat item pesanan baru
exports.createOrderItem = (orderItem, callback) => {
    const query = 'INSERT INTO order_items (order_id, service_id, quantity, price) VALUES (?, ?, ?, ?)';
    db.query(query, [orderItem.order_id, orderItem.service_id, orderItem.quantity, orderItem.price], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, { id: results.insertId, ...orderItem });
    });
};

// Memperbarui item pesanan
exports.updateOrderItem = (id, orderItem, callback) => {
    const query = 'UPDATE order_items SET order_id = ?, service_id = ?, quantity = ?, price = ? WHERE id = ?';
    db.query(query, [orderItem.order_id, orderItem.service_id, orderItem.quantity, orderItem.price, id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

// Menghapus item pesanan
// exports.deleteOrderItem = (id, callback) => {
//     const query = 'DELETE FROM order_items WHERE id = ?';
//     db.query(query, [id], (err, results) => {
//         if (err) {
//             return callback(err, null);
//         }
//         callback(null, results);
//     });
// };

exports.deleteOrderItem = async (orderId, itemId) => {
    try {
        const deleteQuery = 'DELETE FROM order_items WHERE order_id = ? AND id = ?';
        await db.query(deleteQuery, [orderId, itemId]);
    } catch (error) {
        throw error;
    }
};

exports.deleteOrderItemsByOrderId = async (orderId) => {
    try {
        const deleteQuery = 'DELETE FROM order_items WHERE order_id = ?';
        await db.query(deleteQuery, [orderId]);
    } catch (error) {
        throw error;
    }
};
