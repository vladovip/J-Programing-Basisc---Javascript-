function solve (input)
{
    let num = Number(input.shift());
    let inputtype = input.shift();
    let outputtype= input.shift();

    if ( inputtype === "mm"  ){
        num = num  /  10;
    }
     else if (inputtype === "m"){
        num= num  * 100;
    } else if ( inputtype === "cm"){
        num = num;
    }

     let  result = 0; 

    if ( outputtype === "mm"){
        result = num * 10;
    } else if ( outputtype === "m"){
        result= num / 100;
    }
    
    else if ( outputtype === "cm"){
         result= num;
     }

     

    console.log(result.toFixed(3));

 
}
solve ([ 
45,
"cm",
"mm",
 ]);