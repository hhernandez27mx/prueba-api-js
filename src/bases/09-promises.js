//Promesas
import { findHeroeById } from "./exp-imp-file.js"
// setTimeout(() => {
//     const p1 = findHeroeById(id);
//     if (!p1) {
//         reject("No se encontro el heroe");
//     } else {
//         resolve(p1);
//     }


// }, 200);

const getHerAsyn = async (id) =>  {
        setTimeout(() => {
            const p1 = findHeroeById(id);
            if (!p1) {
                reject("No se encontro el heroe");
            } else {
                resolve(p1);
            }

        }, 6000);
}
const p = getHerAsyn(3)

p.then((h) => {
    console.log("Heroe", h)
}).catch(console.warn)

// const f = (data) => { console.log("Heroe", data) }
// getHerAsyn(3)
//     .then(f)
//     .catch(console.warn);



