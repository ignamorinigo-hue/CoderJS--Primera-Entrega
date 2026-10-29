const CANTIDAD_NOTAS = 3;
const NOTA_MINIMA = 1;
const NOTA_MAXIMA = 10;
let suma = 0;

const alumno = prompt("Ingrese el nombre del alumno");
for (let i = 1; i <= CANTIDAD_NOTAS; i++) {
    let entrada = prompt("Ingresa la nota " + i + " del alumno " + alumno);
    let nota = Number(entrada);

    // Se vuelve a pedir la nota hasta que sea un número válido dentro del rango
    while (entrada === null || entrada.trim() === "" || isNaN(nota) || nota < NOTA_MINIMA || nota > NOTA_MAXIMA) {
        alert("Nota inválida. Ingresá un número entre " + NOTA_MINIMA + " y " + NOTA_MAXIMA + ".");
        entrada = prompt("Ingresa la nota " + i + " del alumno " + alumno);
        nota = Number(entrada);
    }

    suma = suma + nota;

    if (nota >= 6) {
        console.log("Nota " + i + ": " + nota + " - Aprobado");
    } else {
        console.log("Nota " + i + ": " + nota + " - Desaprobado");
    }
}

const promedio = suma / CANTIDAD_NOTAS;
console.log("El promedio del alumno " + alumno + " es: " + promedio);

if (promedio >= 8) {
    alert(alumno + " promocionó la materia con un promedio de: " + promedio);
} else if (promedio >= 6) {
    alert(alumno + " aprobó la materia con un promedio de: " + promedio);
} else {
    alert(alumno + " debe recursar. Promedio: " + promedio);
}
