const c = console.log;

c('**********PROGRAMACION ASINCRONA***********');

c('**********ASYNC-AWAIT***********');

const cuadrado = (value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ value: value, result: value * value });
        }, 0 | Math.random() * 100);
    })
}

function cuadrados() {
    c('Inicio Async Function')
    let obj = await cuadrado(0);
    c(`Function:${obj.value}, ${obj.result}`);
    obj = await cuadrado(1);
    c(`Function:${obj.value}, ${obj.result}`);
    obj = await cuadrado(2);
    c(`Function:${obj.value}, ${obj.result}`);
    obj = await cuadrado(3);
    c(`Function:${obj.value}, ${obj.result}`);
    c('Fin Functions');

}

cuadrados();