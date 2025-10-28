/*
var x = 5
let y = 10
const z = 15

var x = 10
let y = "p"
const z = 90


out : Uncaught SyntaxError: redeclaration of let x

*/

import message, {PI, carre} from "./mathUtils.js";

message();
console.log("PI = ", PI);
console.log("carre de 5 = ", carre(5));


function testScope(){
    if(true){
        var a = "var visible partout";
        let b = "let visible ici seulement";
    }
    console.log(a);
    console.log(b);
}

testScope();




function sayHello(name){
    return `Bonjour ${name}`;
}

const sayHelloArrow = (name) => `Bonjour
${name}`;




const person = {
    name:"Sara",
    sayHello: function () {
        console.log("Bonjour" + this.name);

    },
    sayHelloArrow: () => {
        console.log("Bonjour" + this.name);
    },

};

person.sayHello();
person.sayHelloArrow();


