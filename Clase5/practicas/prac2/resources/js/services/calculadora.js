function processData(data) {
    const
        operacion = data.operacion,
        numero1 = Number(data.numeros.n1),
        numero2 = Number(data.numeros.n2);

    let
        resultado = false;
    
    switch(operacion) {
        case 'sumar':
            resultado = numero1 + numero2;
            break;

        case 'restar':
            resultado = numero1 - numero2;
            break;

        case 'multiplicar':
            resultado = numero1 * numero2;
            break;

        case 'dividir':
            if(numero2 != 0)
                resultado = numero1 / numero2;
            break;
    }

    return resultado;
}

self.addEventListener('message', e => {
    const resultado = processData(e.data);
    self.postMessage(resultado);
})