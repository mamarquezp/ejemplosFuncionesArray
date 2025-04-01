function agregarIVA(productos){
    const productosConIVA = productos.map((productos) => {
        productos.precio = (productos.precio * 1.12).toFixed(2)
        return productos
})
    return productosConIVA
}

const productos = [
    {nombre: `Zapatos Blancos`, precio: 100},
    {nombre: `Tenis Nike`, precio: 150},
    {nombre: `Lentes Rayban`, precio: 200}
]

const productosConIVA = agregarIVA(productos)
console.log(productosConIVA)
