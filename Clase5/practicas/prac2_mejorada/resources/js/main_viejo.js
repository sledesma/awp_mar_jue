const
    WORKER_BASE_DIR = 'resources/js/services';


const
    numero1 = document.querySelector('#numero1'),
    numero2 = document.querySelector('#numero2'),
    btnSumar = document.querySelector('#btnSumar'),
    btnRestar = document.querySelector('#btnRestar'),
    btnMultiplicar = document.querySelector('#btnMultiplicar'),
    btnDividir = document.querySelector('#btnDividir'),
    respuesta = document.querySelector('#respuesta'),
    calculadoraWorker = new Worker(WORKER_BASE_DIR+'/calculadora.js');


calculadoraWorker.addEventListener('message', function(e) {
    respuesta.innerHTML = e.data;
});


btnSumar.addEventListener('click', function(){
    // SUMAR
    calculadoraWorker.postMessage({
        operacion: 'sumar',
        numeros: {
            n1: numero1.value,
            n2: numero2.value
        }
    });
});

btnRestar.addEventListener('click', function(){
    // RESTAR
    calculadoraWorker.postMessage({
        operacion: 'restar',
        numeros: {
            n1: numero1.value,
            n2: numero2.value
        }
    });
});

btnMultiplicar.addEventListener('click', function(){
    // MULTIPLICAR
    calculadoraWorker.postMessage({
        operacion: 'multiplicar',
        numeros: {
            n1: numero1.value,
            n2: numero2.value
        }
    });
});

btnDividir.addEventListener('click', function(){
    // DIVIDIR
    calculadoraWorker.postMessage({
        operacion: 'dividir',
        numeros: {
            n1: numero1.value,
            n2: numero2.value
        }
    });
});