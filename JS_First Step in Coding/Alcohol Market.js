function solve (input)
{

let whiskeyprice = Number(input.shift());
let beerquantity = Number(input.shift());
let winequantity = Number(input.shift());
let rakiaquantity = Number(input.shift());
let whiskeyquantity = Number(input.shift());
let rakiaprice = (0.50 * whiskeyprice);
let wineprice = (0.60 * rakiaprice);
let beerprice = (0.20 * rakiaprice);
let totalmoney = (whiskeyprice*whiskeyquantity)+(beerquantity*beerprice)+(winequantity*wineprice)+(rakiaquantity*rakiaprice);
console.log((totalmoney).toFixed(2));

}
solve ([ 
    63.44,
    3.57,
    6.35,
    8.15,
    2.5,
 ]);