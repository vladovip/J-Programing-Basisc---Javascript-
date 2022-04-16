function solve (input)
{
let time1 = Number(input.shift());
let time2 = Number(input.shift());
let time3 = Number(input.shift());

 let totaltime= time1+time2+time3;
 let minutes= Math.floor(totaltime/60);
 let seconds= totaltime%60;

    if( 1< time1< 50 & 1<time2<50 & 1<time3<50 & seconds<10 ){
    console.log(`${minutes}:0${seconds}`);
}   else {
    console.log(`${minutes}:${seconds}`);
} 

}
solve ([ 50,50,49
 ]);