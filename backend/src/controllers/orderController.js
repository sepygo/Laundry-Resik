const Order = require('../models/orderModel');

// Mendapatkan semua pesanan
exports.getAllOrders = (req, res) => {
    Order.getAllOrders((err, orders) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).json(orders);
    });
};

// Mendapatkan pesanan berdasarkan ID
exports.getOrderById = (req, res) => {
    const id = req.params.id;
    Order.getOrderById(id, (err, order) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (!order) {
            return res.status(404).send({ message: 'Order not found' });
        }
        res.status(200).json(order);
    });
};

exports.getOrderByTc = (req, res) => {
    const tc = req.params.tc;
    Order.getOrderByTc(tc, (err, order) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (!order) {
            return res.status(404).send({ message: 'Order not found' });
        }
        res.status(200).json(order);
    });
};

// Membuat pesanan baru
exports.createOrder = (req, res) => {
    const newOrder = req.body;
    Order.createOrder(newOrder, (err, order) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).json(order);
    });
};

// Memperbarui pesanan
exports.updateOrder = (req, res) => {
    const id = req.params.id;
    const updatedOrder = req.body;
    Order.updateOrder(id, updatedOrder, (err) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send({ message: 'Order updated successfully' });
    });
};

// Memperbarui pesanan
exports.updateOrderStatus = (req, res) => {
    const id = req.params.id;
    const updatedOrder = req.body;
    Order.updateOrderStatus(id, updatedOrder, (err) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send({ message: 'Order updated status successfully' });
    });
};

// Menghapus pesanan
exports.deleteOrder = (req, res) => {
    const id = req.params.id;
    Order.deleteOrder(id, (err) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send({ message: 'Order deleted successfully' });
    });
};
