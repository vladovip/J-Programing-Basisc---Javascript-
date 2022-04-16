function solve (input)
{

 let budjet = input.shift();
 let people = Number(input.shift())
 let pricecloth = Number(input.shift()); // per 1  people
 let decor = 0.10 * budjet;
 let totalpricecloth = people*pricecloth;

 if (people>150){
     totalpricecloth=totalpricecloth*0.90;
 }

  let totalexpences = decor + totalpricecloth;
  if ( budjet>= totalexpences){
      console.log("Action!");
      console.log(`Wingard starts filming with ${(budjet-totalexpences).toFixed(2)} leva left.`);
  }
else{
    console.log("Not enough money!");
    console.log(`Wingard needs ${(totalexpences-budjet).toFixed(2)} leva more.`)
}


}
solve ([ 
9587.88,
222,
55.68
 ]);