function solve (input){
   
    let num = Number(input.shift());
    let bonus = 0

 if ( num <=100){
     bonus = bonus+ 5;
 } else if (num > 1000){
     bonus = bonus + 0.10* num;
 } else if(num >100){
     bonus =  bonus + 0.20*num;
 }
 
 if (num % 2 === 0) {
   bonus = bonus + 1 ;
 } else if (num % 10 == 5){
     bonus = bonus + 2;
 }

  console.log (bonus);
  console.log(num+bonus);

}
solve ([ 15875

 ]);