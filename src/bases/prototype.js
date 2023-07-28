


const signos = {
    'aries': [[3, 21], [4, 20]],
    'tauro': [[4, 21], [5, 20]],
    'geminis': [[5, 22], [6, 21]],
   
}

for(const propiedad  in signos){
   const [inicio,fin]= signos[propiedad]

  console.log(propiedad,inicio,fin  )
}