const express = require("express");
const path = require("path");

const app = express();

const usersRoutes = require("./routes/usersRoutes");
const sqlServerRoutes = require("./routes/sqlServerRoutes");
const postgreSQLRoutes = require("./routes/postgreSQLRoutes");

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/api", usersRoutes);

app.use("/api/sqlserver", sqlServerRoutes);

app.use("/api/postgresql", postgreSQLRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});