
//promesas en cadena y usando destructuración , con fetch 

const apiKey = "AJ0WBVgCOQmS0Hr2TDlgakhcQIVgxwL9";
const url = "https://api.giphy.com/v1/gifs/random";


const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

peticion
   .then((resp) => resp.json())
   .then(({ data }) => {
      const { url } = (data.images.original)
      const tagImg = document.createElement("img");
      tagImg.src = url;

      document.body.appendChild(tagImg);
   })
   .catch(console.error)
