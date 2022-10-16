
let nombre = prompt("Ingresa tu nombre completo")
//let empresa = prompt("Ingrese el nombre de su empresa")
//let area = prompt("Ingrese a que área pertenece")

/*
if (empresa === "Coderhouse") {
    console.log("Bienvenido Coder")
} else {
    console.warn("No tenemos registrada a tu empresa")
}

if (area === "Marketing") {
    console.log("La creatividad es tu poder")
} else {
    console.error("Aún no se crea el espacio cool para tu área, lo reportamos")
}

let equipo = confirm("¿Quieres escribirle a tu equipo?")
if (equipo === true) {
    let conecta = prompt("Dinos con quién quieres conectar")

    switch (conecta) {
        case "María":
            console.log("María esta conecta iniciando chat")
            break
        case "Juan":
            console.log("Juan no esta conectado pero dejale un mensaje")
            break
        case "Marcela":
            console.log("Esta en una reu, libre en 10min")
            break
        default:
            console.error("¿Es un nuevo ingreso? mandale el link de descarga")
            break
    }

} */

function superpoder (){
    console.log("Hola", nombre, "tu superpoder es la creatividad")
}

 superpoder ()

 function estrellas (){
    let accion1 = parseFloat(prompt("Ingresa cuantas veces ayudaste a otra área"))
    let accion2 = parseFloat(prompt("Ingresa cuantos proyectos lideraste"))
    let accion3 = parseFloat(prompt("Ingresa a cuantos compañeros les diste estrellas"))
    let resultado = accion1 + (accion2 * 2) + (accion3 * 3)

    console.log("Tu ranking estrellado es", resultado)
}

estrellas ()

const ranking = ["Juan", "Maria", "Alejandro", "Sofia", "Patricia"]

function listarRanking (){
    console.table(ranking)
}

listarRanking ()

function filtrarRanking (){
    let buscar = prompt("Ingresa el nombre que crees es top 5 estrellado")
    let resultado1 = ranking.filter(elemento => elemento.ranking === buscar)    
    if (resultado1 === undefined){
        console.warn("No es parte del top 5 estrellado aún")
    } else {console.table (resultado1)}
}

filtrarRanking()
