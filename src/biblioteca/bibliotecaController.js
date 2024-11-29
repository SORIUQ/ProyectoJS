const ListarBibliotecas = () => {
    const tablaLibros = document.getElementById("tabla-Bibliotecas");
    let cadena = ""

    jsonBiblioteca.bibliotecas.biblioteca.forEach(biblioteca => {

    
        biblioteca.libros.forEach(libro => {
            cadena+= `
                <tr>
                <td>${biblioteca.nombre}</td>
                <td>Lat: ${biblioteca.coordenadas.lat}, Lon: ${biblioteca.coordenadas.lon}</td>
                <td>${libro.titulo}</td>
                <td>${libro.paginas}</td>
                <td>${libro.autor}</td>
                </tr>
            `;
        });

        cadena += "</td>"
    });
    tablaLibros.innerHTML = cadena;
}

window.onload = () => {
    ListarBibliotecas();
}