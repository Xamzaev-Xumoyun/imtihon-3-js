

var apr = [
    {name: "Ali", price: 200},
    {name: "Umid", price: 800},
    {name: "Sardor", price: 400},
]
 function addMax() {
   var max = 0
     for (var item in apr) {
       if (apr[item].price > apr[max].price) {
         max = item
         }
       }
   console.log(apr[max].name)
 }
 addMax(apr)

