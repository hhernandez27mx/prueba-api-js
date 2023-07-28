//Desestructuración de objetos 

const persona = {
    nombre :"Coyote",
    edad :15 ,
    clave : "454565d",
    rango : "Capitan",
    location :{
       lat : 4.65656,
       lon: -13.334
    }
}

const {edad:edadPersona} = persona;
console.log(edadPersona);

const {edad,nombre,clave} = persona;

console.log(edad,nombre);

const  useontexto= ({nombre,edad,clave,rango='Soldado',location}) =>{
   return {
         nombreClave : clave,
         years : edad,
         location :location
   }
}

//const {nombreClave,years,location} = usecontexto(persona);
const {nombreClave,years,location:{lat,lon}} = useontexto(persona);


console.log(nombreClave,years,lat,lon);
