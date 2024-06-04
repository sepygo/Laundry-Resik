const Service = require('../models/serviceModel');

// Mendapatkan semua layanan
exports.getAllServices = (req, res) => {
    Service.getAllServices((err, services) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).json(services);
    });
};

// Mendapatkan layanan berdasarkan ID
exports.getServiceById = (req, res) => {
    const id = req.params.id;
    Service.getServiceById(id, (err, service) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (!service) {
            return res.status(404).send({ message: 'Service not found' });
        }
        res.status(200).json(service);
    });
};

// Membuat layanan baru
exports.createService = (req, res) => {
    const newService = req.body;
    Service.createService(newService, (err, service) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).json(service);
    });
};

// Memperbarui layanan
exports.updateService = (req, res) => {
    const id = req.params.id;
    const updatedService = req.body;
    Service.updateService(id, updatedService, (err) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send({ message: 'Service updated successfully' });
    });
};

// Menghapus layanan
exports.deleteService = (req, res) => {
    const id = req.params.id;
    Service.deleteService(id, (err) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send({ message: 'Service deleted successfully' });
    });
};
