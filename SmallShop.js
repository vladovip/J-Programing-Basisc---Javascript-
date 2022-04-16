function solve (input){
 
 let product = input.shift();
 let cityType = input.shift();
 let productQuantity= Number(input.shift());
 let price = 0;

if ( cityType == "Sofia"){
     if ( product == "coffee"){
         console.log( productQuantity * 0.50);
     }else if ( product == "water"){
        console.log(productQuantity*0.80);
     }else if ( product == "beer"){
        console.log(productQuantity*1.20);
     }else if ( product == "sweets"){
        console.log(productQuantity*1.45);
     }else if ( product == "peanuts"){
        console.log(productQuantity*1.60);
     }
}

else if ( cityType =="Plovdiv"){

    if ( product == "coffee"){
        console.log( productQuantity * 0.40);
    }else if ( product == "water"){
       console.log(productQuantity*0.70);
    }else if ( product == "beer"){
       console.log(productQuantity*1.15);
    }else if ( product == "sweets"){
       console.log(productQuantity*1.30);
    }else if ( product == "peanuts"){
       console.log(productQuantity*1.50);
    }
}

else if (cityType=="Varna"  ){
   
    if ( product == "coffee"){
        console.log( productQuantity * 0.45);
    }else if ( product == "water"){
       console.log(productQuantity*0.70);
    }else if ( product == "beer"){
       console.log(productQuantity*1.10);
    }else if ( product == "sweets"){
       console.log(productQuantity*1.35);
    }else if ( product == "peanuts"){
       console.log(productQuantity*1.55);
}
}
}

solve ([ "Varna", "coffee", 2

 ])