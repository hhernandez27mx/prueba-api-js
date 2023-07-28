//Desestructuración de arreglos 

const personajes =["Coyote","Goku","blue demon","Santo"]
const [,,blue] =personajes;

console.log(blue);
const retornaArreglo =() => {
    return ['dfdfdffd',12333];
}
const [letras ,numeros]= retornaArreglo();
console.log(letras,numeros);

//
const usState = (valor) =>{
    return [valor, ()=>{console.log('hola mi compa')} ];
}

const arr = usState(personajes);
console.log(arr);
//se asigna valor y funcion  de arr
const [nombre, setNombre] = arr;
console.log(nombre);
setNombre();


