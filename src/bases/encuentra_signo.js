
let salir =true
do {
    let dia =  Number(prompt("ingresa dia")), mes = "", year = 0;
   
      
        if( isNaN(dia)){
            alert("no es numero el dia ")
          do {
            dia =  Number(prompt("ingresa dia"))
          } while (dia >= 1 && dia < 32)
        }

    let mesNumero;

    //mes a su valor numerico 
    switch (mes) {
        case 'enero':
            mesNumero = 1
            break
        case 'febreo':
            mesNumero = 2
            break

        default:

            alert('Mes invalido')
    }


    if ((dia >= 21 && mes === 3) || (dia <= 19 && mes === 4)) {
        document.body.innerHTML = 'Aries'
    }
    if ((dia >= 21 && mes == 4) || (dia <= 21 && mes == 5)) {
        document.body.innerHTML = 'Tauro'
    }

     salir = confirm("Deseas constunar ?")

} while (salir)

