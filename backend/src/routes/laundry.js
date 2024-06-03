const express = require('express');
const router = express.Router();
const laundryController = require('../controllers/laundryController');

// Define routes
router.get('/', laundryController.getAllLaundryItems);
router.post('/', laundryController.createLaundryItem);
router.get('/:id', laundryController.getLaundryItemById);
router.put('/:id', laundryController.updateLaundryItem);
router.delete('/:id', laundryController.deleteLaundryItem);

module.exports = router;
