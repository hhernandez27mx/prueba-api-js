//importacion 
/* animals no es el default  
   heroes es el default  no lleva {}
*/

import { heroes, animals } from './data/heroes.js'

console.log("heroes", heroes);

const valor = heroes.find((h) => {
   return h.id === 3
})
console.log("Animales", animals);

const findHeroeById = (id) => {
   return heroes.find((h) => {
      return h.id === id
   })
}

const filtertrHeroeByOwner = (owner) => {

   return heroes.filter((heroe) => {
      return heroe.owner === owner
   })
}


console.log(findHeroeById(3));
console.log(filtertrHeroeByOwner('Marvel')); 