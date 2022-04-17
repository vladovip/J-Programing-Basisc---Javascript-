function solve(input){
     let n = Number(input.shift());
     let maxNumber = Number.MIN_SAFE_INTEGER;
     let minNumber = Number.MAX_SAFE_INTEGER;
    
    for(let i = 0; i < n; i++){
      let num = Number(input.shift());
      if (num > maxNumber){
        maxNumber = num
      }
      if (num < minNumber){
        minNumber = num
      }
    }
    console.log(`Max number: ${maxNumber}`);
    console.log(`Min number: ${minNumber}`);
   } 
solve ([ 
 5, 10,20, 304, 0 , 50 
 ]);