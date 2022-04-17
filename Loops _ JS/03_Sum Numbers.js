function solve (input){

    let incomingData = input.shift();
    let sum = 0;

    while (incomingData !== "Stop"){
         let currentNum = Number(incomingData);
         sum += currentNum;
         incomingData = input.shift();

    }
      console.log(sum);
 
}
solve ([ 
    [ '10', '20', '30', '45', 'Stop' ]
 ]);