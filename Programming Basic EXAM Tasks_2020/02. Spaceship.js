function solve (input){

    let wCraft=Number(input.shift());
    let lCraft = Number(input.shift());
    let hCraft= Number(input.shift());
    let hAstroman = Number(input.shift());

    let volumeCraft = wCraft*lCraft*hCraft;
    let roomVolume= (hAstroman+0.40)*2*2;
    let numberAstroMan=  Math.floor(volumeCraft / roomVolume);

    if (3 <= numberAstroMan && numberAstroMan <= 10){
       console.log (`The spacecraft holds ${numberAstroMan} astronauts.` );
    } else if (numberAstroMan < 3){
        console.log("The spacecraft is too small.");
    } else if ( numberAstroMan > 10){
       console.log("The spacecraft is too big.");
    }

   
 
}
solve ([ 
    4.5,
    4.8,
     5 ,
    1.75,

    

 ]);