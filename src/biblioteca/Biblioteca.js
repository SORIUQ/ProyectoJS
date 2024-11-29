class Biblioteca {

    constructor(nombre, coordenadas, libros) {
        this.nombre = nombre;
        this.coordenadas = coordenadas;
        this.libros = libros.map(libro => new Libro(libro.titulo, libro.paginas, libro.autor));
    }
    
}

const agregarLibro = (nuevoLibro) => {


    let nuevoLibroBueno = {
        "titulo": nuevoLibro.titulo,
        "paginas": nuevoLibro.paginas,
        "autor": nuevoLibro.autor,
        "biblioteca": nuevoLibro.biblioteca.nombre
    }

    console.log(nuevoLibroBueno);

    const bibliotecaSeleccionada = jsonBiblioteca.bibliotecas.biblioteca.find(
        (biblioteca) => biblioteca.nombre === nuevoLibroBueno.biblioteca
    );

    if (bibliotecaSeleccionada) {
        bibliotecaSeleccionada.libros.push(nuevoLibroBueno);
        console.log("Libro añadido correctamente:", nuevoLibroBueno);
        console.log(jsonBiblioteca.bibliotecas.biblioteca)
        localStorage.setItem('bibliotecas', JSON.stringify(jsonBiblioteca));
    } else {
        console.error("Biblioteca no encontrada");
    }
}