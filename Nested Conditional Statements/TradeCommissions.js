function solve (input)
{
  let cityType= input.shift();
  let sales= Number(input.shift());
  let percentage = 0;
  let comissions = percentage * sales; 
  
      switch (cityType)
      {
           case "Sofia": 
           if( 0 < sales && sales<= 500){
             let percentage= 0.05;
             let comissions = percentage*sales;
             console.log((comissions).toFixed(2));
           } else if ( 500< sales && sales<= 1000){
             let percentage = 0.07;
             let comissions= percentage*sales;
             console.log((comissions).toFixed(2));
           } else if (1000<sales && sales <= 10000){
             let percentage= 0.08;
             let comissions = percentage*sales;
             console.log((comissions).toFixed(2));
           } else if ( sales> 10000){
             let percentage= 0.12;
             let comissions= percentage* sales;
             console.log((comissions).toFixed(2));
           } else  {
             console.log("error");}
           break;
           
           case "Varna": 
           if( 0 < sales && sales<=500){
             let percentage= 4.5/100;
             let comissions = percentage*sales;
             console.log((comissions).toFixed(2));
           } else if ( 500 < sales && sales<= 1000){
             let percentage = 7.5 /100;
             let comissions= percentage*sales;
             console.log((comissions).toFixed(2));
           } else if (1000<sales && sales <= 10000){
             let percentage= 0.10;
             let comissions = percentage*sales;
             console.log((comissions).toFixed(2));
           }else if ( sales> 10000){
             let percentage= 0.13;
             let comissions= percentage* sales;
             console.log((comissions).toFixed(2));
           }else  {
            console.log("error");}
           break;
           
           case "Plovdiv": 
           if( 0 < sales && sales<=500){
             let percentage= 5.5/100;
             let comissions = percentage*sales;
             console.log((comissions).toFixed(2));
           } else if ( 500 < sales && sales<= 1000){
             let percentage = 0.08;
             let comissions= percentage*sales;
             console.log((comissions).toFixed(2));
           } else if (1000 < sales && sales <= 10000){
             let percentage= 0.12;
             let comissions = percentage*sales;
             console.log((comissions).toFixed(2));
           }else if ( sales> 10000){
             let percentage= 14.5/100;
             let comissions= percentage* sales;
             console.log((comissions).toFixed(2));
           } else  {
            console.log("error");}
           break;
           default: 
           console.log('error');break;
      }
      
      if ( cityType !=="Sofia"&&  cityType !== "Plovdiv" && cityType!=="Varna" && sales<= 0){
          console.log("error");
      } 
       
  }


solve ([ "Varna", 350,

 ]);