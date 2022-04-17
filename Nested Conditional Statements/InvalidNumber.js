function solve (input)
{

let number = Number(input.shift());
let isvalid= (number >= 100 && number<= 200) || number==0;

if (!isvalid){
    console.log("invalid");
} else {
    console.log("")
}


}
solve ([ 
199
 ]);