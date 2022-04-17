function solve (input){

   let w = Number(input.shift());
   let l = Number(input.shift());
   let sizeCake = w * l;
   let command = input.shift();

   while (command!=="STOP"){
       
    let pieceCake = Number(command);
        sizeCake -= pieceCake;
       
        if(sizeCake < 0){
        break;
       }
       command= input.shift();
   }
     if (command==="STOP"){
     console.log(`${sizeCake} pieces are left.`)
     } else {
         console.log(`No more cake left! You need ${Math.abs(sizeCake)} pieces more.`)
     }


 
}
solve ([ 
 
     '10', '2', '2', '4', '6', 'STOP' 

 ]);