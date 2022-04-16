function solve (input)
{

    let hours = Number(input.shift());
    let minutes = Number(input.shift()) + 15 ;

    if ( minutes >= 60){
        hours = hours +1; 
        minutes= minutes -60;
    }
    if ( hours >=24){
        hours = hours - 24; 
    }

     if ( minutes >=10){
        console.log(`${hours}:${minutes}`);
     } else {
        console.log(`${hours}:0${minutes}`);
     }
     
}
solve ([ 
"12", "49"
 ]);