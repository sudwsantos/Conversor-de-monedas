async function getData(){
const res = await fetch("https://api.gael.cloud/general/public/monedas")
const data = await res.json()
console.log(data);
}
getData()