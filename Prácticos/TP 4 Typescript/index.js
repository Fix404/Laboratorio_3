"use strict";
// Ejercicio 2:
console.log("Corriendo desde typescript");
const texto = "Hola Typescript!";
const numero = 123;
const booleano = true;
const fecha = new Date(2024, 8, 8);
// Ejercicio 3:
const textFromHTML = document.getElementById("textExample");
const numberFromHTML = document.getElementById("numberExample");
const booleanFromHTML = document.getElementById("booleanExample");
const dateFromHTML = document.getElementById("dateExample");
textFromHTML.textContent = `Texto: ${texto}`;
numberFromHTML.textContent = `Número: ${numero}`;
booleanFromHTML.textContent = `Booleano: ${booleano}`;
dateFromHTML.textContent = `Fecha: ${fecha}`;
// Ejercicio 4:
const numero_2 = 3451.67;
function numberToString(numero) {
    let stringyfiedNumber = numero.toString();
    return stringyfiedNumber;
}
const outputForHTML = document.getElementById("functionExample");
outputForHTML.textContent = `Número convertido a cadena: ${numberToString(numero_2)}`;
// Ejercicio 5:
let numbers = [23.5, -5, 8.98, -4.213, 6, -7, 12];
function numbersSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
const sumForHTML = document.getElementById("arrayExample");
sumForHTML.textContent = `Suma del array: ${numbersSum(numbers).toPrecision(6)}`;
// Ejercicio 6:
const student = {
    name: "Ana",
    age: 19,
    class: "Álgebra"
};
const studentNameHTML = document.getElementById("studentName");
const studentAgeHTML = document.getElementById("studentAge");
const studentClassHTML = document.getElementById("studentClass");
studentNameHTML.textContent = `Estudiante: ${student.name}`;
studentAgeHTML.textContent = `Edad: ${student.age}`;
studentClassHTML.textContent = `Curso: ${student.class}`;
const direction = {
    street: "Maza",
    city: "Maipú",
    zipCode: 5515
};
const directionExample = document.getElementById("customType");
directionExample.textContent = `Dirección: *Calle: ${direction.street}, *Ciudad: ${direction.city}, *Código Postal: ${direction.zipCode}`;
const user1 = {
    name: "Jacinto",
    mail: "jacinto123@gmail.com.ru",
    greet() {
        return `Hola ${this.name}`;
    }
};
const interfaceHTML = document.getElementById("interfaceExample");
interfaceHTML.textContent = user1.greet();
// Ejercicio 9:
class Persona {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    presentation() {
        return `Hola soy ${this.name} y tengo ${this.age} años`;
    }
}
let persona1 = new Persona("Carola", 41);
const classDataHTML = document.getElementById("classDataExample");
classDataHTML.textContent = persona1.presentation();
// Ejercicio 10:
class Box {
    constructor() {
    }
    setContent(content) {
        this.content = content;
    }
    getContent() {
        return this.content;
    }
}
let box1 = new Box();
box1.setContent("Este contenido es un texto");
let box2 = new Box();
box2.setContent(-123.45);
const textBoxHTML = document.getElementById("genericClass1");
const numberBoxHTML = document.getElementById("genericClass2");
textBoxHTML.textContent = `Contenido de caja de texto: ${box1.getContent()}`;
numberBoxHTML.textContent = `Contenido de caja numérica: ${box2.getContent()}`;
// Ejercicio 11:
function genericFunction(element) {
    return element;
}
let textValue = "Línea de texto";
let numericValue = 321.78;
const genericFunctionNumberHTML = document.getElementById("genericFunctionNumber");
const genericFunctionTextHTML = document.getElementById("genericFunctionText");
genericFunctionNumberHTML.textContent = `Identidad de número: ${genericFunction(numericValue)}`;
genericFunctionTextHTML.textContent = `Identidad de texto: ${genericFunction(textValue)}`;
// Ejercicio 12:
var Colors;
(function (Colors) {
    Colors["RED"] = "Rojo";
    Colors["BLUE"] = "Azul";
    Colors["PURPLE"] = "Violeta";
    Colors["YELLOW"] = "Amarillo";
    Colors["GREEN"] = "Verde";
})(Colors || (Colors = {}));
const enumHTML = document.getElementById("enumValue");
enumHTML.textContent = `Color favorito: ${Colors.GREEN}`;
