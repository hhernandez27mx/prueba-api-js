//https://cxdev.fanasa.com/performance-cpq-disponibilidad/rest/v1/delivery/orderfilter?orderNumber=2773587602&keySchedule=0912202215000015300046

const url = "https://api.breakingbadquotes.xyz/v1/quotes"
// const orderNum = "2773587602"
// const keySchedule = "0912202215000015300046"
// let headers = new Headers();

// headers.append('Authorization', 'Basic ==')
// const callApi = async () => {
//     try {
//         const urlCall = `${url}?orderNumber=${orderNum}&keySchedule=${keySchedule}`
//         const resp = await fetch(urlCall, { method: "GET", headers: headers })
       
//         const respJson = await resp.json()
//         console.log(respJson.items[0])
//         console.log(respJson.total)
//     } catch (e) {
//         console.log(e)
//     }
// }
// callApi()

const callApi = async () => {

  try {
    
    const response = await fetch(url, { method: "GET" });

    const data = await response.json();
    console.log(`${data[0].quote} - ${data[0].author}`);

  } catch (error) {

    console.error('Error al traer la cita');

  }

};

callApi();
