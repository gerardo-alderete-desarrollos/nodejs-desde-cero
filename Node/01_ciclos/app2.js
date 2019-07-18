function saludar(nombre) {
    let mensaje = `Hola ${nombre}, este es mi primer ap en Node.js`
    return mensaje;
}

let saludo = saludar('Gerardo');

console.log(saludo);