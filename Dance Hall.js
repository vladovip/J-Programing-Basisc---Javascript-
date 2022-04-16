function solve (input)
{
let l = Number(input.shift());
let w = Number(input.shift());
let A = Number(input.shift());
let areazala = (l*100)*(w*100);
let areagarderob= (A*100)*(A*100);
let areaskameika= 0.10*areazala;
let freearea = (areazala - (areagarderob+areaskameika));
let DancerNumber = freearea / 7040;
console.log(Math.floor(DancerNumber));

}
solve ([ 
    50,
    25,
    2
 ]);