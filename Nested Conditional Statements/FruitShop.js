function solve (input){
 
    let product = input.shift();
    let day = input.shift();
    let productQuantity= Number(input.shift());
    let price = product*productQuantity;
   
   if ( day == "Monday"|| day == "Tuesday"||day == "Wednesday"||day == "Thursday"|| day == "Friday" ){
        switch ( product)
        {
            case "banana":
            console.log( (productQuantity * 2.50).toFixed(2)); break;
            case "apple":
            console.log((productQuantity*1.20).toFixed(2)); break;
            case "orange":
            console.log((productQuantity*0.85).toFixed(2)); break;
            case "grapefruit":
            console.log((productQuantity*1.45).toFixed(2));break;
            case "kiwi":
            console.log((productQuantity*2.70).toFixed(2));break;
            case "pineapple":
            console.log((productQuantity*5.50).toFixed(2));break;
            case "grapes":
            console.log((productQuantity*3.85).toFixed(2));break;
         }
        
    } else if (day == "Saturday" || day == "Sunday"){
        
        switch ( product)
        {
            case "banana":
            console.log( (productQuantity * 2.70).toFixed(2)); break;
            case "apple":
            console.log((productQuantity*1.25).toFixed(2)); break;
            case "orange":
            console.log((productQuantity*0.90).toFixed(2)); break;
            case "grapefruit":
            console.log((productQuantity*1.60).toFixed(2));break;
            case "kiwi":
            console.log((productQuantity*3.00).toFixed(2));break;
            case "pineapple":
            console.log((productQuantity*5.60).toFixed(2));break;
            case "grapes":
            console.log((productQuantity*4.20).toFixed(2));break;
         }

    }
     else if (price < 0)
     {
        console.log("error");
     }
        
   }  

 
   solve ([ "tomato", "Monday", 0.5
   
    ])