function solve (input){


    
    let n = input.shift();
    let sumPrimeNumber=0;
    let sumNoPrimeNumber=0;
    
    while (n!== "stop"){
        n = Number(n);
        let isPrime= true;
         if (n < 0) {
             console.log(`Number is negative.`);
             n = input.shift();
             continue;
         }
         if (n === 1){
             isPrime = true;
         }
         let maxDelimeter= Math.floor(Math.sqrt(n));
         for ( let i = 2; i <= maxDelimeter; i++){
              if (n % i == 0){
                 isPrime= false;
                 break;
              }
              
          }

          if (isPrime){
              sumPrimeNumber += n;
          }
          else {
              sumNoPrimeNumber +=n;
          }
          n = input.shift();
    }
 console.log(`Sum of all prime numbers is: ${sumPrimeNumber}`);
 console.log(`Sum of all non prime numbers is: ${sumNoPrimeNumber}`);
    

}
solve ([ 
    
        '3',    '9',
        '0',    '7',
        '19',   '4',
        'stop', ''
      
 ]);