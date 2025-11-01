import { PRODUCTS } from "./data/products.js";
import { isExpired } from "./utils/date.js";
import { AddProduct } from "./services/productService.js";


//PRODUCTS.forEach((p) => console.log(p));

PRODUCTS.forEach((p) => console.log(p.name));




const expired = PRODUCTS.filter(p => isExpired(p.expiryDate));
console.log("Produits expirés :", expired);


const total = PRODUCTS.reduce(
    (somme, p) => somme + p.price * p.quantity,
    0
);

console.log("Valeur totale du stock :", total, "MAD");


const promo = PRODUCTS.filter(p => p.tags.includes("promo"));
console.log("Produits en promo :", promo.map(p => p.name));


const sorted = [...PRODUCTS].sort((a, b) => a.price - b.price);
console.log("Tri par prix croissant :", sorted.map(p =>
p.name));



const newList = await AddProduct(PRODUCTS, {
    name: "Savon",
    category: "Hygiène",
    price: 5,
    quantity: 10,
    expiryDate: "2026-01-01",
    tags: ["hygiene"]
});

console.log("Après ajout :", newList.length, "produits");


