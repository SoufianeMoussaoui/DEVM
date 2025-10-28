/*
var x = 5
let y = 10
const z = 15

var x = 10
let y = "p"
const z = 90


out : Uncaught SyntaxError: redeclaration of let x

*/



import message, { PI, carre } from "./mathUtils.js";

message();
console.log("PI = ", PI);
console.log("carre de 5 = ", carre(5));


function testScope() {
    if (true) {
        var a = "var visible partout";
        let b = "let visible ici seulement";
    }
    console.log(a);
    console.log(b);
}

testScope();




function sayHello(name) {
    return `Bonjour ${name}`;
}

const sayHelloArrow = (name) => `Bonjour
${name}`;




const person = {
    name: "Sara",
    sayHello: function () {
        console.log("Bonjour" + this.name);

    },
    sayHelloArrow: () => {
        console.log("Bonjour" + this.name);
    },

};



person.sayHello();
person.sayHelloArrow();

const fruits = ["pomme", "bannae", "orange"];
fruits.push("kiwi");
fruits.pop();
console.log(fruits);


const nums = [1, 2, 3, 4, 5];

console.log(nums.map(n => n * 2));
console.log(nums.filter(n => n % 2 === 0));
console.log(nums.reduce((sum, n) => sum + n, 0));


console.log(nums.find(n => n > 3));
console.log(nums.some(n => n < 0));
console.log(nums.every(n => n > 0));

/*
const user = { id: 1, name: "Ali", city: "Rabat" };

const { name, city } = user;
console.log(`${name} habite à ${city}`);

const { name: fullName, ...rest } = user;
console.log(fullName);
console.log(rest);
*/


const user = { id: 1, name: "Ali", city: "Rabat" };
// Déstructuration
const { name, city } = user;
console.log(`${name} habite à ${city}`);
// Renommage
const { name: fullName, ...rest } = user;
console.log(fullName);
console.log(rest);

const p = new Promise((resolve) => {
    setTimeout(() => resolve("Opération terminée !"), 2000);
});
p.then(result => console.log(result));





async function getUsers() {
    try {
        const res = await
            fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        console.log(data);
    } catch (e) {
        console.error("Erreur :", e.message);
    }
}
getUsers();

const Name = "Nadia";
const hour = new Date().getHours();
console.log(`Bonjour ${Name}, il est ${hour}h`);

const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2);

function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4));


const settings = { theme: null };
console.log(settings.theme ?? "light"); 
const user2 = { profile: { email: "x@y.com" } };
console.log(user2.profile?.email); 
console.log(user2.address?.city); 


// Gestion des Produits : 
const produits = [
    { nom: "Lait", prix: 25, expireLe: "2025-12-01", type: "Laitier" },
    { nom: "Pain", prix: 8, expireLe: "2024-11-30", type: "Boulangerie" },
    { nom: "Jus d'orange", prix: 15, expireLe: "2026-02-15", type: "Boisson" }
];


const aujourdhui = new Date();
const produitsNonExpires = produits.filter(produit => {
    const dateExpiration = new Date(produit.expireLe);
    return dateExpiration > aujourdhui;
});
