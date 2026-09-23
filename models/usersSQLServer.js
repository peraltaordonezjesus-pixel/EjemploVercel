const { getConnection } = require("../config/sqlserver");

const getAllUsers = async () => {
    const pool = await getConnection();

    const result = await pool
        .request()
        .query("SELECT * FROM users");

    return result.recordset;
};

const createUser = async (user) => {

    const {
        nombre,
        correo,
        contrasena,
        preguntarc,
        respuestarc
    } = user;

    const pool = await getConnection();

    const result = await pool
        .request()
        .input("nombre", nombre)
        .input("correo", correo)
        .input("contrasena", contrasena)
        .input("preguntarc", preguntarc)
        .input("respuestarc", respuestarc)
        .query(`
            INSERT INTO users
            (nombre, correo, contrasena, preguntarc, respuestarc)
            VALUES
            (@nombre, @correo, @contrasena, @preguntarc, @respuestarc);

            SELECT SCOPE_IDENTITY() AS id;
        `);

    return result.recordset[0].id;
};

const getByEmail = async (correo) => {

    const pool = await getConnection();

    const result = await pool
        .request()
        .input("correo", correo)
        .query(`
            SELECT * 
            FROM users 
            WHERE correo = @correo
        `);

    return result.recordset;
};

module.exports = {
    getAllUsers,
    createUser,
    getByEmail
};