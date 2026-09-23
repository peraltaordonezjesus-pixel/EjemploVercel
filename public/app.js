async function cargarUsuarios() {

    const respuesta = await fetch("/api/users");

    const usuarios = await respuesta.json();

    const tabla = document.getElementById("tablaUsuarios");

    usuarios.forEach(usuario => {

        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${usuario.id}</td>
            <td>${usuario.nombre}</td>
            <td>${usuario.carrera}</td>
        `;

        tabla.appendChild(fila);
    });
}

cargarUsuarios();