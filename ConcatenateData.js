function solve(input)
{
let firstNname = input.shift();
let lastName = input.shift();
let age  = Number (input.shift());
let city = input.shift();

let result  = `You are ${firstNname} ${lastName}, a ${age}-years old person from ${city}.`;
console.log (result);

}
solve (["Vladimir","Varbanov", "30", "Kotel"]);