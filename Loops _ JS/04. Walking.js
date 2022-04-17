function solve (input){

    
let goal = 10000;
let steps = 0;
let isGoingHome= false;
let currentSteps  = input.shift();

while ( steps < goal){
    
  if ( currentSteps === "Going home"){
      isGoingHome= true;
      currentSteps= input.shift();
      continue;
  } else if (isGoingHome){
    steps += Number(currentSteps);
    break;
  }
    steps += Number(currentSteps);
    currentSteps= input.shift();

}
  
if (steps >=  goal){
    console.log(`Goal reached! Good job!`);
  } else {
      let moreSteps = goal- steps;
      console.log (`${moreSteps} more steps to reach goal.`);
  }
  
 
}
solve ([ 
    '1500', '300', '2500', '3000', 'Going home', '200', '' 

 ]);
