const nombre=prompt("Ingrese su nombre")
console.log(nombre)
let direccion
let tiempo=0
alert("¡Hola, " + nombre + "! Bienvenido a One Faith.")
let atencion=prompt("¿Qué tipo de atención requiere? 1 = Cuestión puntual y específica | 2 = Consulta personalizada | 3 = Visita")
while (atencion!=1 && atencion!=2 && atencion!=3) {
    alert("Por favor, ingrese una opción válida")
    atencion=prompt("¿Qué tipo de atención requiere? 1 = Cuestión puntual y específica | 2 = Consulta personalizada | 3 = Visita")
}
switch (atencion) {
    case "1":
        tiempo=12
        break
    case "2":
        tiempo=24
        break
    case "3":
        tiempo=48
        direccion=prompt("Ingrese su dirección")
        while (direccion=="") {
            alert("No ha ingresado ningún dato")
            direccion=prompt("Ingrese su dirección")
            break
        }
}
console.log(direccion)
alert("¡De acuerdo, " + nombre + "!" + " Nos contactaremos con usted para resolver su consulta antes de las siguientes " + tiempo + " horas hábiles.")