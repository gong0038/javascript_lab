// an array contains all the info
var brands = [
    {brand : "extra",
    price : 1.11},
    {brand : "trident",
    price : 2.22,},
    {brand: "doubleMint",
    price: 3.33},
    {brand:"bubbleGum",
    price: 4.44}
    ];
//add price and count items
var addPrice = (function(){
    return {
        myMethod : function(brand) {
            for(i=0;i<brands.length;i++){
                if (brand == brands[i].brand){
                    counts = Number(document.getElementById('totalItems').innerText)+1;
                    document.getElementById("totalItems").innerHTML = counts;
                    counts++;
                    price = brands[i].price;
                    totalPrice = Number(document.getElementById('totalPrice').innerText)+price;
                    document.getElementById("totalPrice").innerHTML= parseFloat(totalPrice).toFixed(2);    
            }
            }              
        }
    };   
})();
// clear button
var clearReset = (function(){     
    return {               
        myMethod : function() {
            document.getElementById("totalItems").innerHTML = "";
            document.getElementById("totalPrice").innerHTML = "";
         }
     };   
})();     
 


