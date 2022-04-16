function solve (input)
{
   let flowers = input.shift();
   let numberFlowers = Number(input.shift());
   let budget = Number (input.shift());
   let price = numberFlowers*flowers;

    switch ( flowers ) {
      case "Roses":
        price =    numberFlowers * 5;
       if(numberFlowers > 80 ){
           price = price*0.90
       }
       break;

       case "Dahlias":
        price = numberFlowers* 3.80;
       if(numberFlowers > 90 ){
           price = price*0.85;
       }
       break;
      
       case "Tulips":
        price = numberFlowers* 2.80;
       if(numberFlowers > 80 ){
           price = price*0.85;
       }
       break;
      
       case "Narcissus":
        price = numberFlowers* 3;
       if(numberFlowers < 120 ){
           price = price*1.15;
       }
       break;
       
       case "Gladiolus":
        price = numberFlowers* 2.5;
       if(numberFlowers < 80 ){
           price = price*1.20;
       }
       break; 
    }
     
    if ( budget >= price ){
        let moneylleft = budget - price ; 
         console.log (` Hey, you have a great garden with ${numberFlowers} ${flowers} and ${moneylleft.toFixed(2)} leva left.`);
     } else {
       let moneNeeded = price - budget;
       console.log(`Not enough money, you need ${moneNeeded.toFixed(2)} leva more.`);
         
     }

}
solve ([ 
   "Narcissus", 119, 360, 
 ]);