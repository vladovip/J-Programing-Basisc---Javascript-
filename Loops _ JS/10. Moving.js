function solve (input){

let w = Number(input.shift());
let l = Number(input.shift());
let h = Number(input.shift());
let totalFreeSpace=w*l*h;
let command = input.shift();

while ( command !== "Done"){
    let box = Number(command);
    totalFreeSpace -= box;
    if( totalFreeSpace < 0){
        break;
    }
    command = input.shift();
}
if (totalFreeSpace<0) {
    console.log(`No more free space! You need ${Math.abs(totalFreeSpace)} Cubic meters more.`);
}
else {
    console.log(`${totalFreeSpace} Cubic meters left.`)
}
 

}
solve ([ 
    10,
    1,
    2,
    4,
    6,
    "Done",
 ]);