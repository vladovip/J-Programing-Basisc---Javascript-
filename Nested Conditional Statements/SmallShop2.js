function solve (input){
 
    let product = input.shift();
    let cityType = input.shift();
    let productQuantity= Number(input.shift());
    let price = 0;
   
   if ( cityType == "Sofia"){
        switch ( product)
        {
            case "coffee":
            console.log( (productQuantity * 0.50).toFixed(1)); break;
            case "water":
            console.log((productQuantity*0.80).toFixed(1)); break;
            case "beer":
            console.log((productQuantity*1.20).toFixed(1)); break;
            case "sweets":
            console.log((productQuantity*1.45).toFixed(1));break;
            case "peanuts":
            console.log((productQuantity*1.60).toFixed(1));break;
         }
        }
               
    else if ( cityType =="Plovdiv") { 
        switch ( product)
        {
          case "coffee":
          console.log(( productQuantity * 0.40).toFixed(1));break;
          case "water":
          console.log((productQuantity*0.70).toFixed(1));break;
          case "beer":
          console.log((productQuantity*1.15).toFixed(1));break;
          case "sweets":
          console.log((productQuantity*1.30).toFixed(1));break;
          case "peanuts":
          console.log((productQuantity*1.50).toFixed(1));break;
        }
   }
   
   else if (cityType=="Varna"  ){
          switch (product)
          {
            case "coffee":
            console.log((productQuantity * 0.45).toFixed(1));break;
            case "water":
            console.log((productQuantity*0.70).toFixed(1));break;
            case "beer":
            console.log((productQuantity*1.10).toFixed(1));break;
            case "sweets":
            console.log((productQuantity*1.35).toFixed(1));break;
            case "peanuts":
            console.log((productQuantity*1.55).toFixed(1));break;
          }
       
          
   } else console.log ("Unknown type");

   }
   
   solve ([ "water", "Plovdiv", 3
   
    ])