const express = require("express");

const router = express.Router();

const {
    getUsers,
    registerUser,
    findByEmail
} = require("../controllers/postgreSQLController");


router.get("/users", getUsers);

router.post("/users", registerUser);

router.get("/users/:correo", findByEmail);


module.exports = router;