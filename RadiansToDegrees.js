function solve (input)
{
 let rad = Number(input.shift());
 let p = Math.PI;
 let degrees = rad*180/p;
 console.log(Math.round(degrees));

}
solve([0.7854]);