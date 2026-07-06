function abrirReceta(
    titulo,
    ingredientes,
    preparacion,
    imagen
){

    document.getElementById("modalTitulo")
    .innerText = titulo;

    document.getElementById("modalIngredientes")
    .innerText = ingredientes;

    document.getElementById("modalPreparacion")
    .innerText = preparacion;

    document.getElementById("modalImg")
    .src = imagen;

    document.getElementById("modal")
    .style.display = "flex";
}

function cerrarModal(){

    document.getElementById("modal")
    .style.display = "none";

}

window.onclick = function(event){

    const modal =
    document.getElementById("modal");

    if(event.target == modal){

        modal.style.display = "none";

    }

}

const formulario =
document.getElementById("formComentario");

const listaComentarios =
document.getElementById("listaComentarios");

formulario.addEventListener(
    "submit",
    function(e){

        e.preventDefault();

        const nombre =
        document.getElementById("nombre").value;

        const comentario =
        document.getElementById("comentario").value;

        const nuevoComentario =
        document.createElement("div");

        nuevoComentario.classList.add("comentario");

        nuevoComentario.innerHTML =
        `
        <h4>${nombre}</h4>
        <p>${comentario}</p>
        `;

        listaComentarios.prepend(
            nuevoComentario
        );

        formulario.reset();

    }
);

function buscarRecetas() {

    const texto = document
        .getElementById("buscador")
        .value
        .toLowerCase();

    if (texto.length < 3) return;

    const resultado = recetas.find(receta =>
        receta.nombre.toLowerCase().includes(texto)
    );

    if (resultado) {
        window.location.href = resultado.pagina;
    }
}