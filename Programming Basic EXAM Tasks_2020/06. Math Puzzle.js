function solve (input){

let magicNumber =  Number(input.shift());
let counter = 0; 
let isFound = false;
 
    for (let a = 1 ; a <= 30; a++){
        for ( let b = 1 ; b <= 30; b++){
            for(let c = 1 ; c <= 30; c++){
                 
                if ( a<b && b < c && a < c &&  (a+b+c) === magicNumber){
                    console.log(`${a} + ${b} + ${c} = ${magicNumber}`);  
                    break;   
                }
                 else if ( a>b && b>c && a>c && (a*b*c) === magicNumber){    
                    console.log(`${a} * ${b} * ${c} = ${magicNumber}`); 
                    break;
                }
               
            }
               
        }
       
    }  
   

}
solve ([ 
12,
]);