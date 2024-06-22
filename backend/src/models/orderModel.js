const db = require('../db');

// Mendapatkan semua pesanan
exports.getAllOrders = (callback) => {
    // const query = 'SELECT * FROM orders';
    const query = 'SELECT id, DATE_FORMAT(order_date, "%d-%m-%Y") AS order_date, tracking_code, status, total_price, customer_name, telp, address, notes FROM orders';
    db.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

// Mendapatkan pesanan berdasarkan ID
exports.getOrderById = (id, callback) => {
    const query = 'SELECT * FROM orders WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results[0]);
    });
};

// Mendapatkan pesanan berdasarkan Tracking Code
exports.getOrderByTc = (tc, callback) => {
    const query = 'SELECT * FROM orders WHERE tracking_code = ?';
    db.query(query, [tc], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results[0]);
    });
};

// Membuat pesanan baru
exports.createOrder = (order, callback) => {
    const today = new Date();
    const year = today.getFullYear().toString().padStart(4, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');

    const query = 'INSERT INTO orders (order_date, status, total_price, customer_name, telp, address, notes) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [order.order_date, order.status, order.total_price, order.customer_name, order.telp, order.address, order.notes], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        const orderId = results.insertId;
        const trackCode = `LDR${month}${day}${orderId}${year.slice(2)}`;
        const setTrackingCode = 'UPDATE orders SET tracking_code = ? WHERE id = ?';
        // db.query(setTrackingCode, [trackCode, orderId], (err, results) => {
        //     if (err) {
        //         return callback(err, null);
        //     }
        //     callback(null, results);
        // });

        db.query(setTrackingCode, [trackCode, orderId]);

        const orderItems = order.order_items.map(item => [orderId, item.service_id, item.quantity, item.price]);
        const queryOrderItems = 'INSERT INTO order_items (order_id, service_id, quantity, price) VALUES ?';
        db.query(queryOrderItems, [orderItems], (err) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, { id: orderId, ...order });
        });
    });
};

// Membuat pesanan WA
exports.createOrderWA = (order, callback) => {
    const today = new Date();
    const year = today.getFullYear().toString().padStart(4, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');

    const query = 'INSERT INTO orders (order_date, status, total_price, customer_name, telp, address, notes) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [order.order_date, order.status, 0, order.customer_name, order.telp, order.address, order.notes], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        const orderId = results.insertId;
        const trackCode = `LDR${month}${day}${orderId}${year.slice(2)}`;
        const setTrackingCode = 'UPDATE orders SET tracking_code = ? WHERE id = ?';

        db.query(setTrackingCode, [trackCode, orderId]);
    });
};

// Memperbarui pesanan
exports.updateOrder = (id, order, callback) => {
    const query = 'UPDATE orders SET order_date = ?, status = ?, total_price = ?, customer_name = ?, telp = ?, address = ?, notes = ? WHERE id = ?';
    db.query(query, [order.order_date, order.status, order.total_price, order.customer_name, order.telp, order.address, order.notes, id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

// Memperbarui status pesanan
exports.updateOrderStatus = (id, order, callback) => {
    const query = 'UPDATE orders SET status = ? WHERE id = ?';
    db.query(query, [order.status, id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

// Menghapus pesanan
// exports.deleteOrder = (id, callback) => {
//     const query = 'DELETE FROM orders WHERE id = ?';
//     db.query(query, [id], (err, results) => {
//         if (err) {
//             return callback(err, null);
//         }
//         callback(null, results);
//     });
// };



exports.deleteOrder = (id, callback) => {
    // Hapus terlebih dahulu order_items yang terkait dengan pesanan yang akan dihapus
    const deleteOrderItemsQuery = 'DELETE FROM order_items WHERE order_id = ?';
    db.query(deleteOrderItemsQuery, [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        // Setelah menghapus order_items, lanjutkan untuk menghapus pesanan itu sendiri
        const deleteOrderQuery = 'DELETE FROM orders WHERE id = ?';
        db.query(deleteOrderQuery, [id], (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, results);
        });
    });
};