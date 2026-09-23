async function cargarUsuarios() {

    const respuesta = await fetch("/api/postgresql/users");

    const usuarios = await respuesta.json();

    const tabla = document.getElementById("tablaUsuarios");

    tabla.innerHTML = "";

    usuarios.forEach(usuario => {

        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${usuario.id}</td>
            <td>${usuario.nombre}</td>
            <td>${usuario.correo}</td>
        `;

        tabla.appendChild(fila);
    });
}


const formulario = document.getElementById("formUsuario");

formulario.addEventListener("submit", async (evento) => {

    evento.preventDefault();

    const usuario = {
        nombre: document.getElementById("nombre").value,
        correo: document.getElementById("correo").value,
        contrasena: document.getElementById("contrasena").value,
    };

    const respuesta = await fetch("/api/postgresql/users", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(usuario)
    });

    const resultado = await respuesta.json();

    if (respuesta.ok) {

        alert("Usuario registrado correctamente");

        formulario.reset();

        cargarUsuarios();

    } else {

        alert("Error: " + resultado.error);
    }
});


cargarUsuarios();