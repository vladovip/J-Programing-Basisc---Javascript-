function solve (input){

 let n = Number(input.shift());
 let namePresentation = input.shift();
 //let nextIndex = 2;
 let  sumAllaverage=0;
 let counter = 0;
 
 while(namePresentation !== "Finish"){
    let sum = 0; 
    for ( let i= 1; i<=n ; i++){
        let grade = Number(input.shift());
        sum += grade;
        //nextIndex++;
    }
    let avarageGrade = sum / n;
    console.log(`${namePresentation}-${avarageGrade.toFixed(2)}`);
    sumAllaverage += avarageGrade;
    namePresentation = input.shift();
    //nextIndex++;
    counter++;
 }

console.log(`Student's final assessment is ${(sumAllaverage/counter).toFixed(2)}`)

 
}
solve ([ 
    
        '2',        'While-Loop',
        '6.00',     '5.50',
        'For-Loop', '5.84',
        '5.66',     'Finish',
        ''
      
      
 ]);