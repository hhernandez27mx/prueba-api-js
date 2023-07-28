//funciones 


function getUserActive(nombre){
    return {
         id:1343443,
         nombre:nombre,
         edad:15

    }
}
//funcio flacha botigona 
const fflecha =(nombre )=> ( {
    id:1343443,
    nombre:nombre,
    edad:15

})
const userActive= getUserActive("lobpo");
console.log(userActive);

//objeto flecha
const userF = fflecha("volador");
console.log(userF);