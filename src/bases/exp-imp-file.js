//importacion 
/* animals no es el default  
   heroes es el default  no lleva {}
*/

import { heroes } from "./data/heroes.js";



export const findHeroeById = (id) => heroes.find((h) => h.id === id);

export const findHeroeByOwner = (owner) => heroes.find((h) => h.owner === owner);
