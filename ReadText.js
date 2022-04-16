function solve (input){

  let command = input.shift();

  while ( command != "Stop"){
         console.log(command);
         command = input.shift();
  }

 
}
solve ([ 
    "Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
 ]);