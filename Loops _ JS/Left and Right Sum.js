function solve (input){

    let n = Number(input[0]);
    let leftSum = 0;
    let rightSum = 0;

    for( var i = 1; i <=n  ; i++){
        leftSum += Number(input[i]);
    }
    
    for( var i = 1; i <=n  ; i++){
         rightSum += Number(input[i]);
    }
    
    if (leftSum == rightSum){
        console.log( "Yes, sum = " + Math.abs(leftSum-rightSum));
    }
    else if(leftSum  != rightSum) {
        console.log("No, diff = " + Math.abs(leftSum-rightSum));
    }

}
solve ([ 2, 90, 9, 50, 50

 ]);