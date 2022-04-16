function solve (input)
{

 let income = Number(input.shift());
 let score = Number(input.shift());
 let minimumSalary = Number(input.shift());
 let socialscholarship= Math.floor(0.35 * minimumSalary);
 let excellentscholarship= Math.floor(score * 25);

 if ( income < minimumSalary && score >= 4.50 && socialscholarship > excellentscholarship){
     console.log (`You get a Social scholarship ${Math.floor(socialscholarship)} BGN`);
 }
   else if (score>= 5.50 ){
     console.log(`You get a scholarship for excellent results ${Math.floor(excellentscholarship)} BGN`);
 } 
    else {
    console.log("You cannot get a scholarship!");
 }


}
solve ([ 
480.00,
4.60,
450.00,
 ]);