const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.get('/', orderController.getAllOrders);
router.get('/:id', orderController.getOrderById);
router.get('/tracking/:tc', orderController.getOrderByTc);
router.post('/', orderController.createOrder);
router.put('/:id', orderController.updateOrder);
router.put('/status/:id', orderController.updateOrderStatus);
router.delete('/:id', orderController.deleteOrder);

module.exports = router;
