const usersService = require("../services/usersService");

function obtenerUsuarios(req, res) {
    const usuarios = usersService.obtenerUsuarios();

    res.json(usuarios);
}

module.exports = {
    obtenerUsuarios
};