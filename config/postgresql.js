const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
    host: process.env.PG_HOST,
    port: Number(process.env.PG_PORT),
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    ssl: {
        rejectUnauthorized: false
    }
});

const getConnection = async () => {
    try {
        const client = await pool.connect();

        console.log("Conectado a Supabase");

        client.release();

        return pool;
    } catch (error) {
        console.error("Error de conexión a Supabase:", error);
        throw error;
    }
};

module.exports = {
    getConnection
};