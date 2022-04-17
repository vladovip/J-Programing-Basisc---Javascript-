
function solve (input){

let moneyFood = Number(input.shift());
let priceSuvenirs = Number(input.shift());
let priceHotel= Number(input.shift());
let moneyGas= (((420/100)*7)*1.85);
let moneyFirstDay = 0.90* priceHotel;
let moneySecondDay = 0.85*priceHotel;
let moneyThirdDay= 0.80*priceHotel;
let TotalMoney = moneyGas + (3*priceSuvenirs) + (3*moneyFood) + moneyFirstDay+ moneySecondDay+moneyThirdDay;
console.log (`Money needed: ${(TotalMoney).toFixed(2)}`)

    

 
}
solve ([ 
200,
200,
1000,

    
 ]);