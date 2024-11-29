const ListarLibros = () => {
    const tablaLibros = document.querySelector(".tabla-Libros");
    
    let cadena = "";

    jsonLibro.libros.forEach(libro => {

        cadena += `
        <tr>
        <td>${libro.titulo}</td>
        <td>${libro.paginas}</td>
        <td>${libro.autor}</td>
        <td>${libro.biblioteca}</td>
        <td><a class="btn btn-warning" href="editarLibro.html">Editar</a></td>
        <td><button class="btn btn-danger">Borrar</button></td>
        </tr>
        `;
    });

    tablaLibros.innerHTML = cadena;
}

window.onload = () => {
    ListarLibros();
}