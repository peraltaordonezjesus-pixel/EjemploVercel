const fs = require("fs");
const path = require("path");

function obtenerUsuarios() {
    const ruta = path.join(__dirname, "../data/users.json");

    const datos = fs.readFileSync(ruta, "utf8");

    return JSON.parse(datos);
}

module.exports = {
    obtenerUsuarios
};