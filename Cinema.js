function solve (input)
{
 let type = input.shift();
 let row = Number(input.shift());
 let columns = Number(input.shift());
 

 switch (type) {
     
    case "Premiere": console.log((row*columns*12).toFixed(2)+ " leva"); break;
    case "Normal":  console.log((row*columns* 7.50).toFixed(2)+" leva"); break;
    case "Discount": console.log((row*columns* 5.00).toFixed(2)+" leva"); break;

 }
}
solve ([ "Discount", 12 , 30

 ]);