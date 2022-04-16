function solve(input)
{
let dogs = Number (input.shift());
let animals = Number (input.shift());
let pricekuche= 2.50;
let priceanimals= 4;
let totalprice = (dogs*pricekuche) + (animals*priceanimals);
console.log((totalprice).toFixed(2) + " lv.");
}
solve([5,4]);