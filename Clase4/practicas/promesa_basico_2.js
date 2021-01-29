// Funcion que recibe dos Number y retorna un Number
// REPRESENTA UNA OPERACIÓN SINCRÓNICA
function suma(n1, n2) {
	if (
		(n1 != Number.NEGATIVE_INFINITY || n1 != Number.POSITIVE_INFINITY) &&
		(n2 != Number.NEGATIVE_INFINITY || n2 != Number.POSITIVE_INFINITY)
	)
		return n1 + n2;
	else return false;
}

// Funcion que recibe dos Number y retorna una
// Promesa que resuelve en un Number
// REPRESENTA UNA OPERACION ASINCRÓNICA
function asyncSuma(n1, n2) {
	return new Promise((resolve, reject) => {
		if (
			(n1 != Number.NEGATIVE_INFINITY ||
				n1 != Number.POSITIVE_INFINITY) &&
			(n2 != Number.NEGATIVE_INFINITY || n2 != Number.POSITIVE_INFINITY)
		)
			resolve(n1 + n2);
		else reject();
	});
}
