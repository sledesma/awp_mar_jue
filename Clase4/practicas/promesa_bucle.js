// Evaluar f(x) = x + 2 en [0; 1000]

function bucle() {
    const res = [];

    for (let i = 0; i <= 1000; i++) {
        const val = i + 2;
        res.push({
            x: i,
            fX: val
        });
    }

    return res;
}
/*
function asyncBucle() {
    return new Promise((resolve, reject) => {
        const res = [];

        for (let i = 0; i <= 1000; i++) {
            const val = i + 2;
            res.push({
                x: i,
                fX: val
            });
        }
    
        resolve(res);
    })
}
*/

async function asyncBucle() {
    const res = [];

    for (let i = 0; i <= 1000; i++) {
        const val = i + 2;
        res.push({
            x: i,
            fX: val
        });
    }

    return res;
}

/*
const res = asyncBucle();
res.then(function(r){
    console.log(r)
})
console.log('Holaaa');
console.log('Estoy cargando');
console.log('cosas');
*/
/*
const res = bucle();
console.log(res);
console.log('Holaaa');
console.log('Estoy cargando');
console.log('cosas');
*/