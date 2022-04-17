function solve (input){


    let averagespeed = Number(input.shift());
    let fuelper100km = Number(input.shift());
   
    let distance = 384400;
    let timeSpentMoon = 3;
    let totalDistance = distance*2;
    let totalTimeTraveling =  Math.ceil (totalDistance / averagespeed);
    
    let totalTime = Math.trunc(totalTimeTraveling + timeSpentMoon);
    let TotalFuel = (totalDistance/100) * fuelper100km ; 
    
    //Напишете програма, която пресмята за колко часа Георги
    // ще отиде и ще се върне и колко литра гориво ще са му нужни. 
  console.log (totalTime);
  console.log(TotalFuel);


}
solve ([ 
    5000,
    7,
    
 ]);