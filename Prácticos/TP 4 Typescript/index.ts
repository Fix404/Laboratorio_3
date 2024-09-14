// Ejercicio 2:
console.log("Corriendo desde typescript")

const texto:string="Hola Typescript!"
const numero:number=123
const booleano:boolean=true
const fecha= new Date(2024, 8, 8)

// Ejercicio 3:
const textFromHTML:HTMLElement=document.getElementById("textExample")!
const numberFromHTML:HTMLElement=document.getElementById("numberExample")!
const booleanFromHTML:HTMLElement=document.getElementById("booleanExample")!
const dateFromHTML:HTMLElement=document.getElementById("dateExample")!

textFromHTML.textContent=`Texto: ${texto}`
numberFromHTML.textContent=`Número: ${numero}`
booleanFromHTML.textContent=`Booleano: ${booleano}`
dateFromHTML.textContent=`Fecha: ${fecha}` 

// Ejercicio 4:
const numero_2:number=3451.67

function numberToString(numero:number):string{
    let stringyfiedNumber:string=numero.toString()
    return stringyfiedNumber
}

const outputForHTML:HTMLElement=document.getElementById("functionExample")!
outputForHTML.textContent=`Número convertido a cadena: ${numberToString(numero_2)}`

// Ejercicio 5:
let numbers:number[]=[23.5, -5, 8.98, -4.213, 6, -7, 12]

function numbersSum(numbers:number[]):number{
    let sum:number=0

    for (let i=0; i<numbers.length; i++){
        sum+=numbers[i]
    }

    return sum
}

const sumForHTML:HTMLElement=document.getElementById("arrayExample")!

sumForHTML.textContent=`Suma del array: ${numbersSum(numbers).toPrecision(6)}`

// Ejercicio 6:
const student={
    name:"Ana",
    age:19,
    class:"Álgebra"
}

const studentNameHTML:HTMLElement=document.getElementById("studentName")!
const studentAgeHTML:HTMLElement=document.getElementById("studentAge")!
const studentClassHTML:HTMLElement=document.getElementById("studentClass")!

studentNameHTML.textContent=`Estudiante: ${student.name}`
studentAgeHTML.textContent=`Edad: ${student.age}`
studentClassHTML.textContent=`Curso: ${student.class}`

// Ejercicio 7:
type Adress = {
    street:string,
    city:string,
    zipCode:number
}

const direction:Adress ={
    street:"Maza",
    city:"Maipú",
    zipCode:5515
}

const directionExample:HTMLElement=document.getElementById("customType")!

directionExample.textContent=`Dirección: *Calle: ${direction.street}, *Ciudad: ${direction.city}, *Código Postal: ${direction.zipCode}`

// Ejercicio 8:
interface IUser {
    name:string,
    mail:string,
    greet():void
}

const user1:IUser={
    name:"Jacinto",
    mail:"jacinto123@gmail.com.ru",
    greet():string{
        return `Hola ${this.name}`
    }
}

const interfaceHTML:HTMLElement=document.getElementById("interfaceExample")!

interfaceHTML.textContent=user1.greet()!

// Ejercicio 9:
class Persona {
    name:string;
    age:number;

    constructor(name:string, age:number){
        this.name=name;
        this.age=age;
    }

    presentation():string{
        return `Hola soy ${this.name} y tengo ${this.age} años`;
    }
}

let persona1=new Persona("Carola", 41)
const classDataHTML=document.getElementById("classDataExample")!

classDataHTML.textContent=persona1.presentation()

// Ejercicio 10:
class Box<T>{
    private content?:T;

    constructor(){

    }

    setContent(content:T){
        this.content=content;
    }

    getContent(){
        return this.content;
    }
}

let box1=new Box<string>()
box1.setContent("Este contenido es un texto")

let box2=new Box<number>()
box2.setContent(-123.45)

const textBoxHTML:HTMLElement=document.getElementById("genericClass1")!
const numberBoxHTML:HTMLElement=document.getElementById("genericClass2")!

textBoxHTML.textContent=`Contenido de caja de texto: ${box1.getContent()}`
numberBoxHTML.textContent=`Contenido de caja numérica: ${box2.getContent()}`

// Ejercicio 11:
function genericFunction<T>(element:T):T{
    return element;
}

let textValue:string="Línea de texto"
let numericValue:number=321.78

const genericFunctionNumberHTML:HTMLElement=document.getElementById("genericFunctionNumber")!
const genericFunctionTextHTML:HTMLElement=document.getElementById("genericFunctionText")!

genericFunctionNumberHTML.textContent=`Identidad de número: ${genericFunction(numericValue)}`
genericFunctionTextHTML.textContent=`Identidad de texto: ${genericFunction(textValue)}`

// Ejercicio 12:
enum Colors{
    RED="Rojo",
    BLUE="Azul",
    PURPLE="Violeta",
    YELLOW="Amarillo",
    GREEN="Verde"
}

const enumHTML:HTMLElement=document.getElementById("enumValue")!
enumHTML.textContent=`Color favorito: ${Colors.GREEN}`

