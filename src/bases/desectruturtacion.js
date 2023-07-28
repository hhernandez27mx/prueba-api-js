const personajes = ["Coyote", "Goku", "blue demon", "Santo"]

const getId = (numero) => {
    return numero
}


const getArr = (valor) => {
    return [valor, (numero) => {
        return numero
    }]
}


const [nom, getMiID] = getArr(3400)
let x = getMiID(4500)

console.log(x)
