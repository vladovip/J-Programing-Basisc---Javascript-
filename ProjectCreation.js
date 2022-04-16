function solve (input)
{
let name = input.shift();
let numberprojects= Number(input.shift());
let totaltime= numberprojects*3;
console.log(`The architect ${name} will need ${totaltime} hours to complete ${numberprojects} project/s.`)

}
solve(['Sanya', '9' ]);