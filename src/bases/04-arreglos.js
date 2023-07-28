
const arre = [1,2,3,4];

//... operador spreet para arreglos

let array2= [... arre,5]

let arrCaudrado = array2.map(function(num){
   return   num*num;
})

console.log(array2)
console.log(arre)

console.log(arrCaudrado)