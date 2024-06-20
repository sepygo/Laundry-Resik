const OrderItem = require('../models/orderItemModel');

// Mendapatkan semua item pesanan
exports.getAllOrderItems = (req, res) => {
    OrderItem.getAllOrderItems((err, orderItems) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).json(orderItems);
    });
};

// Mendapatkan item pesanan berdasarkan ID
exports.getOrderItemById = (req, res) => {
    const id = req.params.id;
    OrderItem.getOrderItemById(id, (err, orderItem) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (!orderItem) {
            return res.status(404).send({ message: 'Order item not found' });
        }
        res.status(200).json(orderItem);
    });
};

// Mendapatkan item pesanan berdasarkan order ID
exports.getOrderItemByOrderId = (req, res) => {
    const id = req.params.id;
    OrderItem.getOrderItemByOrderId(id, (err, orderItem) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (!orderItem) {
            return res.status(404).send({ message: 'Order item by order ID not found' });
        }
        res.status(200).json(orderItem);
    });
};

// Membuat item pesanan baru
exports.createOrderItem = (req, res) => {
    const newOrderItem = req.body;
    OrderItem.createOrderItem(newOrderItem, (err, orderItem) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).json(orderItem);
    });
};

// Memperbarui item pesanan
exports.updateOrderItem = (req, res) => {
    const id = req.params.id;
    const updatedOrderItem = req.body;
    OrderItem.updateOrderItem(id, updatedOrderItem, (err) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send({ message: 'Order item updated successfully' });
    });
};

// Menghapus item pesanan
// exports.deleteOrderItem = (req, res) => {
//     const id = req.params.id;
//     OrderItem.deleteOrderItem(id, (err) => {
//         if (err) {
//             return res.status(500).send(err);
//         }
//         res.status(200).send({ message: 'Order item deleted successfully' });
//     });
// };

exports.deleteOrderItem = async (req, res) => {
    try {
        const { orderId, itemId } = req.params;
        await OrderItem.deleteOrderItem(orderId, itemId);
        res.status(204).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.deleteOrderItemsByOrderId = async (req, res) => {
    try {
        const { orderId } = req.params;
        await OrderItem.deleteOrderItemsByOrderId(orderId);
        res.status(204).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};