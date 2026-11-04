class Estudiante {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }

    mostrarDatos(){
        console.log("Nombre: " + nombre)
        console.log("Edad: " + this.edad
    }
}

const alumno = new Estudiante("Luis", 20)
alumno.mostrarDatos()