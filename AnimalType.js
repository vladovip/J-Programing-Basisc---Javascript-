function solve (input)
{

let typeAnimal = input.shift();

switch (typeAnimal)
{
    case "dog": 
    console.log ("mammal"); break;
    case "crocodile": 
    case "tortoise": 
    case "snake": 
    console.log ("reptile"); break;
    default:
    console.log("unknown"); break;

}
 
}
solve ([  "crocodile"

 ]);