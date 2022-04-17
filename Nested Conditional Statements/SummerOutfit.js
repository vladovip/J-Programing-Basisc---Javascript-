function solve (input)
{
  let celsius = Number(input.shift());
  let TimeofDay = input.shift();
  let outfit;
  let shoes;

  if ( 10 <= celsius && celsius <=18){
      
    switch (TimeofDay){
        
        case "Morning": outfit= "Sweatshirt"; shoes = "Sneakers"; break;
        case "Afternoon": outfit= "Shirt"; shoes = "Moccasins"; break;
        case "Evening": outfit= "Shirt"; shoes = "Moccasins"; break;

    }
   console.log (`It's ${celsius} degrees, get your ${outfit} and ${shoes}.`)
  } 
 else if (18 < celsius && celsius<= 24 ){

    switch (TimeofDay){
        
        case "Morning": outfit= "Shirt"; shoes = "Moccasins"; break;
        case "Afternoon": outfit= "T-Shirt"; shoes = "Sandals"; break;
        case "Evening": outfit= "Shirt"; shoes = "Moccasins"; break;

    }
   console.log (`It's ${celsius} degrees, get your ${outfit} and ${shoes}.`)
} 
  else if (celsius >= 25 ){

    switch (TimeofDay){
        
        case "Morning": outfit= "T-Shirt"; shoes = "Sandals"; break;
        case "Afternoon": outfit= "Swim Suit"; shoes = "Barefoot"; break;
        case "Evening": outfit = "Shirt"; shoes = "Moccasins"; break;

    }
   console.log (`It's ${celsius} degrees, get your ${outfit} and ${shoes}.`)

}
 
}
solve ([ 
  28, "Evening",
 ]);