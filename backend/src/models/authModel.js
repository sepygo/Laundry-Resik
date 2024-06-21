const db = require('../db_auth');
const bcrypt = require('bcrypt');

exports.findByEmail = async (email) => {
    try {
        const query = 'SELECT * FROM users WHERE email = ?';
        const [rows] = await db.query(query, [email]);
        return rows[0];
    } catch (error) {
        throw error;
    }
};