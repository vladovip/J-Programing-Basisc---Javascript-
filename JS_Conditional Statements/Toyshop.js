function solve (input)
{

    let tripprice= Number(input.shift());
    let puzzles= Number(input.shift());
    let dolls= Number(input.shift());
    let teddyBears= Number(input.shift());
    let minions= Number(input.shift());
    let trucks= Number(input.shift());
    let totalpricetoys= (puzzles*2.60 + dolls*3 + teddyBears*4.10 + minions*8.20 + trucks*2);
    let totalToys= (puzzles+dolls+teddyBears+minions+trucks);
    let totalincome = 0;

    if ( totalToys >=50 ){

        totalpricetoys = totalpricetoys*0.75;
        totalincome = (totalpricetoys*0.90);
    }   else {
      
        totalpricetoys = totalpricetoys;
        totalincome = (totalpricetoys*0.90);
    }

    if ( totalincome >= tripprice ){

        console.log (`Yes! ${(Math.abs(totalincome - tripprice)).toFixed(2)} lv left.` );
    }
      else if (tripprice > totalincome) {
          console.log ( `Not enough money! ${(Math.abs(tripprice - totalincome )).toFixed(2)} lv needed.`);
      }

 
}
solve ([ 
40.8,
20,
25,
30,
50,
10,
    
 ]);