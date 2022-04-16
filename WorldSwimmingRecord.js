function solve (input)
{
   let worldrecord = Number(input.shift()); // recorda e v secundi za podobrenie
   let distance = Number(input.shift());   // razstoqnieto e v metri koeto da prepluva
   let timePerMeter= Number(input.shift()); // vremeto v secudni za koeto Ivan pluva 1 metar
   let totaltime = distance*timePerMeter;
   let delay =  ((Math.floor(distance / 15)))  * 12.5 ;
   let totaldelay = totaltime + delay; 

   let timeforswimming = Math.abs((distance * timePerMeter) + delay);


   if ( timeforswimming >= worldrecord){
     console.log(`No, he failed! He was ${(timeforswimming - worldrecord).toFixed(2)} seconds slower.`);
   }
   else {
     console.log(`Yes, he succeeded! The new world record is ${(timeforswimming).toFixed(2)} seconds.`);
 }


}
solve ([ 
55555.67,
3017,
5.03,

 ]);