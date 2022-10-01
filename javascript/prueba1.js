let nombre = prompt("Ingresa tu nombre completo")
let empresa = prompt("Ingrese el nombre de su empresa")
let area = prompt("Ingrese a que área pertenece")

if (empresa == "Coderhouse") {
    console.log("Bienvenido Coder")
} else {
    console.warn("No tenemos registrada a tu empresa")
}

if (area == "Marketing") {
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

}