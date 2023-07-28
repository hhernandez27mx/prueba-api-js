
//promesas en cadena y usando destructuración , con fetch 

const apiKey = "AJ0WBVgCOQmS0Hr2TDlgakhcQIVgxwL9";
const url = "https://api.giphy.com/v1/gifs/random";


//const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

const getImagen = async() => {
   try {

      const resp =  await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
      const {data } = await resp.json();
      const { url } = (data.images.original)
      //const tagImg = document.createElement("img");
      //tagImg.src = url;
      console.log(data)
      //document.body.appendChild(tagImg);
   }catch(e){
       console.log(e);
   }

  

}
getImagen();

console.log('esperando')
