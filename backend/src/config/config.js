const config = {
    port: process.env.PORT || 3100,
    db: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'laundry_resik'
    }
};

module.exports = config;
