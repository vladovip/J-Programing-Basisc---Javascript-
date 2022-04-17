function solve (input){

let  minPoorGrades = Number(input.shift());
let  allGrades = 0;
let  examCount = 0;
let  lastExam  = "";
let  poorGrades= 0;  

let currentExam = input.shift();
let currentGrade= Number(input.shift());
let isEnough = (currentExam !== "Enough");
let isPoorGradeHit= (poorGrades < minPoorGrades);

while(isEnough && isPoorGradeHit){
 
    if( currentGrade <= 4){
     poorGrades++;
 }
  lastExam = currentExam;
  examCount ++;
  allGrades += currentGrade;
  
  currentExam = input.shift();
  currentGrade = Number(input.shift());
  
  isEnough = currentExam !== "Enough";
  isPoorGradeHit = ( poorGrades < minPoorGrades);

}
  if ( poorGrades< minPoorGrades){
    let averageGrade = (allGrades / examCount).toFixed(2);
    console.log (`Average score: ${averageGrade}`);
    console.log(`Number of problmes: ${examCount}`);
    console.log(`Last problem: ${lastExam}`);
    
  } else {
      console.log(`You need a break, ${poorGrades} poor grades.`)
  }
 
 
}
solve ([ 
    
        '3',
         'Money',
        '6',
         'Story',
        '4',
         'Spring Time',
        '5', 
        'Bus',
        '6', 
        'Enough',
        ''
      
      
 ]);