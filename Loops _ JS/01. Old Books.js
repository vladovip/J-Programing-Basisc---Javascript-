function solve (input){
 let book = input.shift();
 let libraryCapacity = Number(input.shift());
  let checkedBooks = 0;
  let isFound = false;

while ( checkedBooks < libraryCapacity){
    let currentBook = input.shift();
     
    if (currentBook === book ){
        console.log(`You checked ${checkedBooks} books and found it.`) 
        isFound= true;
        break;
     }
     checkedBooks++;
}
//The book you search is not here!
//You checked 4 books.
   if (isFound=== false) {
     console.log(`The book you search is not here!`)
     console.log(`You checked ${checkedBooks} books.`)

   }
 
}
solve ([ 
     'Troy', '8', 'Stronger', 'Life Style', 'Troy', '' 
 ]);
