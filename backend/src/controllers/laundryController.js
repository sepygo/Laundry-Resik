exports.getAllLaundryItems = (req, res, next) => {
    res.status(200).json({ message: 'Fetched all laundry items' });
};

exports.createLaundryItem = (req, res, next) => {
    res.status(201).json({ message: 'Laundry item created' });
};

exports.getLaundryItemById = (req, res, next) => {
    res.status(200).json({ message: 'Fetched laundry item by id' });
};

exports.updateLaundryItem = (req, res, next) => {
    res.status(200).json({ message: 'Laundry item updated' });
};

exports.deleteLaundryItem = (req, res, next) => {
    res.status(200).json({ message: 'Laundry item deleted' });
};
