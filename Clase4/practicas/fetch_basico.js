// https://jsonplaceholder.typicode.com/posts

// fetch() Recibe un Request y devuelve una
// promesa que resuelve en un Response

// fetch() permite convertir un objeto Request
// en una Promesa que resuelve en un Response

// SIEMPRE QUE QUIERA OBTENER EL Response DE UN
// Request, ME SIRVE EL fetch()

console.log(Request.prototype);

console.log(Response.prototype);

// Cache (JS): Conjunto de equivalencias Request / Response

fetch(new Request('https://jsonplaceholder.typicode.com/posts'))
.then(res => res.json())
.then(data => console.log(data));