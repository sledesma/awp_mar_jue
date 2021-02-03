const worker = new Worker('resources/js/services/calculadora.js');

let data = {};

document.querySelectorAll('*[data-model]').forEach(item => {
    item.addEventListener('input', e => {
        const 
            clave = e.target.dataset.model,
            valor = e.target.value;

        data = Object.assign({}, data, {
            [clave]: valor
        });
        
        console.log(data);
    });
});

document.querySelectorAll('*[data-operation]').forEach(item => {
    item.addEventListener('click', e => {
        const 
            source = e.target.dataset.operation, // sumar@numero1,numero2
            sourceParts = source.split('@'),
            op = sourceParts[0],
            numberParts = sourceParts[1].split(','),
            numero1 = numberParts[0],
            numero2 = numberParts[1]

        worker.postMessage({
            operacion: op,
            numeros: {
                n1: data[numero1],
                n2: data[numero2]
            }
        });
    });
});

worker.addEventListener('message', e => {
    alert(e.data);
})