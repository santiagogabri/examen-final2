const lista = []

const numeroRandom = (min,max) =>{
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const agregarNumeros = (event) =>{
    event.preventDefault()
    let desde = document.getElementById("desde")
    let hasta = document.getElementById("hasta")
    let cantidad = document.getElementById("cantidad")

    let min = desde.valueAsNumber
    let max = hasta.valueAsNumber

    for (let i=0; i< cantidad.valueAsNumber; i++){
        let numero = numeroRandom(min,max)
        lista.push(numero)
    }

    mostrarLista()

    
}
const mostrarLista = () =>{
    let salida = document.getElementById("salida")
    salida.innerHTML = ``
    lista.map((elemento,indice)=>{
        salida.innerHTML+= `
    <tr>
        <th>${indice} </th>
        <th>${elemento} </th>
        <th><button onclick="borrarElemento(${indice})">borrar</button></th>
    </tr>
        `
    })
}

const borrarElemento = (indice) =>{
    lista.splice(indice,1)
    mostrarLista()

}