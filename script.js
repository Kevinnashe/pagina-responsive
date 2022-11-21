let d = document

let mostrar = d.getElementById("mostrar")

let cerrar = d.getElementById("cerrar")

let link1 = d.getElementById("link1")

let link2 = d.getElementById("link2")

let link3 = d.getElementById("link3")

let link4 = d.getElementById("link4")

let link5 = d.getElementById("link5")

mostrar.onclick = function mostrarFuncion() {

        link1.style.display = "flex";
        link2.style.display = "flex";
        link3.style.display = "flex";
        link4.style.display = "flex";
        link5.style.display = "flex";
        mostrar.style.display = "none"
        cerrar.style.display = "block"

}

cerrar.onclick = function mostrarFuncion() {

        link1.style.display = "none";
        link2.style.display = "none";
        link3.style.display = "none";
        link4.style.display = "none";
        link5.style.display = "none";
        mostrar.style.display = "block"
        cerrar.style.display = "none"

}
