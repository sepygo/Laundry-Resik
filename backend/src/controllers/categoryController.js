const Category = require('../models/categoryModel');

// Mendapatkan semua kategori
exports.getAllCategories = (req, res) => {
    Category.getAllCategories((err, categories) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).json(categories);
    });
};

// Mendapatkan kategori berdasarkan ID
exports.getCategoryById = (req, res) => {
    const id = req.params.id;
    Category.getCategoryById(id, (err, category) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (!category) {
            return res.status(404).send({ message: 'Category not found' });
        }
        res.status(200).json(category);
    });
};

// Membuat kategori baru
exports.createCategory = (req, res) => {
    const newCategory = req.body;
    Category.createCategory(newCategory, (err, category) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).json(category);
    });
};

// Memperbarui kategori
exports.updateCategory = (req, res) => {
    const id = req.params.id;
    const updatedCategory = req.body;
    Category.updateCategory(id, updatedCategory, (err) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send({ message: 'Category updated successfully' });
    });
};

// Menghapus kategori
exports.deleteCategory = (req, res) => {
    const id = req.params.id;
    Category.deleteCategory(id, (err) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send({ message: 'Category deleted successfully' });
    });
};
