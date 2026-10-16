const CANTIDAD_NOTAS = 3;
let suma=0;

const alumno = prompt("Ingrese el nombre del alumno");
for (let i = 1; i <= CANTIDAD_NOTAS; i++) {
    const nota = number(prompt("Ingresa la nota " + i + " del alumno " + alumno));
    suma = suma + nota;

if (nota>=6) {
    console.log("Nota" + i + ":" + nota + " - Aprobado");}
    else {
    console.log("Nota" + i + ":" + nota + " - Desaprobado");
    }    
}
const promedio = suma / CANTIDAD_NOTAS;
console.log("El promedio del alumno " + alumno + " es: " + promedio);

if (promedio >= 8) {
    alert( alumno + "promocionó la materia con un promedio de: " + promedio);
    else if (promedio >= 6) {
        alert(alumno + "aprobó la materia con un promedio de: " + promedio);
    }else {
        alert(alumno + "Debe recursar. Promedio: " + promedio);
    }