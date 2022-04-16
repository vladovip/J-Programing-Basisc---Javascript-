function solve (input)
{
   let nubmerDays= Number(input.shift());
   let typeofroom = input.shift();
   let feedback = input.shift();  
   let nights= (nubmerDays - 1);
   let price = 0;
   
   switch(typeofroom)
   {
     case "room for one person": 
     price = 18 * nights;  
     break;
     
     case "apartment":
         price = 25;
         if ( nights<10){
             price= price*0.70;
         }  
         else if ( 10 <=nights && nights<=15 ){
             price= price*0.65;
         } else if (nights>15 ){
             price = price*0.50;
         }
         break;

     case "president apartment":
         price = 35.00;
        if ( nights < 10) {
            price= price*0.90;
        }  
        else if ( 10<=nights && nights<=15 ){
            price = price*0.85;
        } else if (nights>15){
            price = price*0.80;
        }
        break;

   }
       let totalprice = price * nights;

 if ( feedback == "positive"){
     totalprice = totalprice*1.25;
 } else {
    totalprice= totalprice*0.90;    
 }
  console.log ((totalprice).toFixed(2));

}
solve ([ 
     2, "apartment", "positive",
 ]);