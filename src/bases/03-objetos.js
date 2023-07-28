

const gato ={
    nombre :"Mafi",
    edad : 5,
    address:{
        calle:"sapo",
        lat :13.455,
        lon: 1.455
    }
}
const nombre="lobo"; 
const loco="lobon";
console.log(nombre);
//clonaar datos 
const mafi ={... gato}
mafi.color="negro";
console.log(gato);
console.log(mafi);