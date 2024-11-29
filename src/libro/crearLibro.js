const cargarBibliotecas = () => {

    const selectBiblioteca = document.getElementById("biblioteca");
    let cadena = "";
    jsonBiblioteca.bibliotecas.biblioteca.forEach(biblioteca => {
        cadena += `<option value="${biblioteca.nombre}">${biblioteca.nombre}</option>`
    });
    selectBiblioteca.innerHTML = cadena;
}


    
const crearLibro = (e) => {
    e.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const paginas = document.getElementById("paginas").value;
    const autor = document.getElementById("autor").value;
    const bibliotecaNombre = document.getElementById("biblioteca").value;

    const bibliotecaSeleccionada = jsonBiblioteca.bibliotecas.biblioteca.find(b => b.nombre == bibliotecaNombre);
    
    const nuevoLibro = new Libro(titulo, paginas, autor, bibliotecaSeleccionada);

    agregarLibro(nuevoLibro);
};

window.onload = () => {
    cargarBibliotecas();
    document.getElementById("form-libro").addEventListener("submit", crearLibro)
}