// Una promesa es una operación asincrónica
// que puede ser resuelta o rechaza

// Crear => ¿Cuando se resuelve? ¿Cuando se rechaza?
const miProm = new Promise((resolver, rechazar) => {
	setTimeout(resolver, 3000);
});

// Usar => ¿Que sucede cuando se resuelve? ¿Y cuando se rechaza?
miProm
	.then(function () {
		alert("Hola al cabo de 3 segs");
	})
	.catch(function () {
		console.log("HAAA");
	});
