//funciones avanzadas arrays

require ('colours')
const readline = require ('readline-sync')

const colaBanco = []

function nuevoCliente (cliente){
    colaBanco.push(cliente)

}

function atenderCliente (){
    colaBanco.shift()
}

console.log(`Inicia la cola`)
console.log(colaBanco)
nuevoCliente(`Daniel`)
nuevoCliente(`Juan`)
console.log(colaBanco)
nuevoCliente(`Pedro`)
nuevoCliente(`Marlene`)
atenderCliente()
console.log(colaBanco)
nuevoCliente(`Gabriela`)
nuevoCliente(`David`)
atenderCliente()
atenderCliente()
nuevoCliente(`Francisco`)
console.log(colaBanco)