function solve (input)
{
let numbertables= Number(input.shift());
let l = Number(input.shift());
let w = Number(input.shift());
let a = l + 0.60;
let b = w + 0.60;
let c = 0.50 * l;
let AreaTablesSheet=a*b;
let AreaCareta= c*c;
let totatlUSDprice=(numbertables*AreaTablesSheet*7)+(numbertables*AreaCareta*9); 
let totalBGNprice= totatlUSDprice*1.85;
console.log((totatlUSDprice).toFixed(2) + " USD");
console.log((totalBGNprice).toFixed(2)+ " BGN");

}
solve ([5, 
    1.00, 
    0.50,
 ]);