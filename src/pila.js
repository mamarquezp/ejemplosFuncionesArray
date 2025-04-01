
const pilaFactura = []

function nuevaFactura (factura){
    pilaFactura.unshift(factura)

}

function pagarFactura (){
    pilaFactura.pop()
}

console.log(`Inicia la pila`)
console.log(pilaFactura)
nuevaFactura(`Cena`)
nuevaFactura(`Ropa`)
console.log(pilaFactura)
nuevaFactura(`Zapados`)
nuevaFactura(`Super`)
pagarFactura()
console.log(pilaFactura)
nuevaFactura(`Telefono`)
nuevaFactura(`Agua`)
pagarFactura()
pagarFactura()
nuevaFactura(`Luz`)
console.log(pilaFactura)