function solve (input)
{
 let days= Number(input.shift());
 let ChiefNumbers= Number(input.shift());
 let tortanumber=Number(input.shift());
 let gofretanumber=Number(input.shift());
 let pancakenumber=Number(input.shift());
 let totalpricetorta=tortanumber*ChiefNumbers*days*45;
 let totalpricegofreta= gofretanumber*ChiefNumbers*days*5.80;
 let totalpricepancake=pancakenumber*ChiefNumbers*days*3.20;
 let razhodi = (totalpricetorta+totalpricegofreta+totalpricepancake)*1/8;
 let sabranasuma= (totalpricetorta+totalpricegofreta+totalpricepancake) - razhodi;
 console.log ((sabranasuma).toFixed(2));

}
solve ([ 
    131,
    5,
    9,
    33,
    46,
 ]);