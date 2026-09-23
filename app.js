const express = require("express");
const path = require("path");

const app = express();

const usersRoutes = require("./routes/usersRoutes");

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/api", usersRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});