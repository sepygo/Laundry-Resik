const express = require('express');
const router = express.Router();
const orderItemController = require('../controllers/orderItemController');

router.get('/', orderItemController.getAllOrderItems);
router.get('/:id', orderItemController.getOrderItemById);
router.get('/order/:id', orderItemController.getOrderItemByOrderId);
router.post('/', orderItemController.createOrderItem);
router.put('/:id', orderItemController.updateOrderItem);
router.delete('/:id', orderItemController.deleteOrderItem);
router.delete('/:orderId/:itemId', orderItemController.deleteOrderItem);
router.delete('/:orderId', orderItemController.deleteOrderItemsByOrderId);

module.exports = router;
