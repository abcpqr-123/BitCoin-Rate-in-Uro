var url = "https://api.coindesk.com/v1/bpi/currentprice.json";

fetch(url)
.then(function(responce){
  console.log(responce);
 return responce.json()
 })
.then(function(data){
   console.log(data.bpi.EUR.rate);
});
