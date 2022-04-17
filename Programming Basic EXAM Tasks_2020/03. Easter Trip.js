function solve (input){

    let destination= input.shift();
    let datetype = input.shift();
    let nights = Number(input.shift());
    let price=0;
    
  
     if ( destination === "France"){
      
          switch (datetype){
          
          case "21-23":   price =  nights* 30; break;
          case "24-27":   price = nights* 35; break;
          case "28-31":   price= nights* 40; break;
          }       
    } else if( destination === "Italy"){

        switch (datetype){
          
            case "21-23":   price =  nights* 28; break;
            case "24-27":   price = nights* 32; break;
            case "28-31":   price= nights* 39; break;
            }

    } else if ( destination=== "Germany"){

            switch (datetype){
          
            case "21-23":   price =  nights* 32; break;
            case "24-27":   price = nights* 37; break;
            case "28-31":   price= nights* 43; break;
            }
       
    }
     console.log(`Easter trip to ${destination} : ${price.toFixed(2)} leva.`)
  
   
}

solve ([ 
    'Italy',
    '21-23',
    '7',

    
 ]);