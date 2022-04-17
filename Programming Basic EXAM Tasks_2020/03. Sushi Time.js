function solve (input){

  let sushiType= input.shift();
  let typeResturant = input.shift();
  let portion = Number(input.shift());
  let orderHome = input.shift();
  let priceFood = 0;

   if ( typeResturant === "Sushi Zone"){
    
        switch (sushiType){
        
        case "sashimi":   priceFood = 4.99 * portion; break;
        case "maki":      priceFood = 5.29 * portion; break;
        case "uramaki":   priceFood = 5.99 * portion; break;
        case "temaki":    priceFood = 4.29 * portion; break;      
        
        }
       
        if (orderHome === "Y"){
            totalprice = Math.ceil(priceFood + 0.20*priceFood);
            console.log (`Total price: ${totalprice} lv.` )
        } else if ( orderHome === "N"){
           
            console.log(`Total price: ${Math.ceil(priceFood)} lv.` )
        }  
   }
   
    else if ( typeResturant === "Sushi Time"){
        
        switch (sushiType){
        
            case "sashimi":   priceFood = 5.49 * portion; break;
            case "maki":      priceFood = 4.69 * portion; break;
            case "uramaki":   priceFood = 4.49 * portion; break;
            case "temaki":    priceFood = 5.19 * portion; break;      
        } 
       
        if (orderHome === "Y"){
            totalprice = Math.ceil(priceFood + 0.20*priceFood);
            console.log (`Total price: ${totalprice} lv.` )
        } else if ( orderHome === "N"){
           
            console.log(`Total price: ${Math.ceil(priceFood)} lv.` )
        } 

    }
    else if ( typeResturant === "Sushi Bar"){
        
        switch (sushiType){
        
            case "sashimi":   priceFood = 5.25 * portion; break;
            case "maki":      priceFood = 5.55 * portion; break;
            case "uramaki":   priceFood = 6.25 * portion; break;
            case "temaki":    priceFood = 4.75 * portion; break;      
        } 
        
        if (orderHome === "Y"){
            totalprice = Math.ceil(priceFood + 0.20*priceFood);
            console.log (`Total price: ${totalprice} lv.` )
        } else if ( orderHome === "N"){
           
            console.log(`Total price: ${Math.ceil(priceFood)} lv.` )
        } 
    }
    else if ( typeResturant === "Asian Pub"){
        
        switch (sushiType){
        
            case "sashimi":   priceFood = 4.50 * portion; break;
            case "maki":      priceFood = 4.80 * portion; break;
            case "uramaki":   priceFood = 5.50 * portion; break;
            case "temaki":    priceFood = 5.50 * portion; break;      
        }
        
        if (orderHome === "Y"){
            totalprice = Math.ceil(priceFood + 0.20*priceFood);
            console.log (`Total price: ${totalprice} lv.` )
        } else if ( orderHome === "N"){
           
            console.log(`Total price: ${Math.ceil(priceFood)} lv.` )
        }

    }  else {
        console.log (`${typeResturant} is invalid restaurant!` )
    }

 
}
solve ([ 
  

 ]);