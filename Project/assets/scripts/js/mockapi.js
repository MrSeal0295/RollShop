const URL = 'https://67c0a509b9d02a9f224a85f5.mockapi.io/api/v1/Rolls'

window.addEventListener('load', async () =>{
    const data = await fetch(URL)
    const rolls = await data.json
    console.log(rolls)
})