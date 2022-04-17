function solve (input){


    let startInterval= Number(input.shift());
    let stopInterval= Number(input.shift());
    let magicNumber= Number(input.shift());
    let counter = 0;
    let isFound = false;
  
    for (let i = startInterval ; i <= stopInterval; i++){
            for ( let z = startInterval ; z<= stopInterval; z++){
                counter++;
                if ( i+z === magicNumber){
                    isFound=true;
                    console.log(`Combination N:${counter} (${i} + ${z} = ${magicNumber})`);
                    break;
                }
                
            }
            if(isFound){
                break;
            }
    } if (!isFound){
            console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }
    
 
}
solve ([ 
    1, 10, 5,
 ]);