function solve (input){


    let N = Number(input.shift());
    let M = Number(input.shift());
    let S = Number(input.shift());
    let  result = "";

   for ( let i = M; i > N ; i--){

    if ( i % 2 === 0  &&  i % 3 === 0 ){   
           
        if (i === S){
            break;
        }     
            else if  (i !== S) {
            let current = i; 
            result += current + " ";

        } 

        }
    }
           console.log(result);
 
}
solve ([ 
    1,
    36,
    12,

   
 ]);