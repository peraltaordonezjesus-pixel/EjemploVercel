const sql = require("mssql");
require("dotenv").config();

const sqlServerConfig = {
    user: process.env.SQLSERVER_USER,
    password: process.env.SQLSERVER_PASSWORD,
    server: process.env.SQLSERVER_SERVER,
    database: process.env.SQLSERVER_DB,
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

const getConnection = async () => {
    try {
        const pool = await sql.connect(sqlServerConfig);
        console.log("Conectado a SQL Server");
        return pool;
    } catch (error) {
        console.error("Error de conexión a SQL Server:", error);
        throw error;
    }
};

module.exports = {
    getConnection
};