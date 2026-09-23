const { getConnection } = require("../config/postgresql");

const getAllUsers = async () => {

    const pool = await getConnection();

    const result = await pool.query(`
        SELECT *
        FROM users
        ORDER BY id
    `);

    return result.rows;
};


const createUser = async (user) => {

    const {
        nombre,
        correo,
        contrasena,
    } = user;

    const pool = await getConnection();

    const result = await pool.query(`
        INSERT INTO users
        (nombre, correo, contrasena)
        VALUES ($1, $2, $3)
        RETURNING id
    `, [
        nombre,
        correo,
        contrasena,
    ]);

    return result.rows[0].id;
};


const getByEmail = async (correo) => {

    const pool = await getConnection();

    const result = await pool.query(`
        SELECT *
        FROM users
        WHERE correo = $1
    `, [correo]);

    return result.rows;
};


module.exports = {
    getAllUsers,
    createUser,
    getByEmail
};