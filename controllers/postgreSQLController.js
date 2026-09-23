const {
    getAllUsers,
    createUser,
    getByEmail
} = require("../models/usersPostgreSQL");


const getUsers = async (req, res) => {

    try {

        const users = await getAllUsers();

        res.json(users);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: error.message
        });
    }
};


const registerUser = async (req, res) => {

    try {

        const id = await createUser(req.body);

        res.status(201).json({
            id
        });

    } catch (error) {

        console.error(error);

        res.status(400).json({
            error: error.message
        });
    }
};


const findByEmail = async (req, res) => {

    try {

        const users = await getByEmail(req.params.correo);

        res.json(users);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: error.message
        });
    }
};


module.exports = {
    getUsers,
    registerUser,
    findByEmail
};