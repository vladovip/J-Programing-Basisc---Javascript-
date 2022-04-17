function solve (input){

let budget = Number(input.shift());
let season = input.shift();
let fishermans= Number(input.shift());
let priceSpring= 3000;
let priceSummerAutumn = 4200;
let priceWinter = 2600;
let price = 0;

if ( season == "Spring"){

    if ( fishermans <=6 ){
        let price = priceSpring*0.90;
        if (budget >= price ){
            console.log( `Yes! You have ${(budget - price).toFixed(2)} leva left.`);
        } else if (budget<price) {
             console.log( `Not enough money! You need ${(price-budget).toFixed(2)} leva.`);
        }
    }  else if ( fishermans <=6 && (fishermans % 2) ==0){
        let price= priceSpring*0.85;
        if (budget >= price ){
            console.log( `Yes! You have ${(budget - price).toFixed(2)} leva left.`);
        } else if (budget<price) {
             console.log( `Not enough money! You need ${(price-budget).toFixed(2)} leva.`);
        }
    } else if ( 7 <= fishermans && fishermans <=11){
        let price= priceSpring*0.85;
        if (budget >= price ){
            console.log( `Yes! You have ${(budget - price).toFixed(2)} leva left.`);
        } else if (budget<price) {
             console.log( `Not enough money! You need ${(price-budget).toFixed(2)} leva.`);
        }
    } else if ( 7 <= fishermans && fishermans <=11 &&  fishermans % 2 ==0 ){
        let price= priceSpring*0.80;
        if (budget >= price ){
            console.log( `Yes! You have ${(budget - price).toFixed(2)} leva left.`);
        } else if (budget<price) {
             console.log( `Not enough money! You need ${(price-budget).toFixed(2)} leva.`);
        }
    } else if (fishermans >=12){
        let price=priceSpring*0.75;
        if (budget >= price ){
            console.log( `Yes! You have ${(budget - price).toFixed(2)} leva left.`);
        } else if (budget<price) {
             console.log( `Not enough money! You need ${(price-budget).toFixed(2)} leva.`);
        }
    }else if (fishermans >=12  && fishermans % 2 ==0  ){
        let price=priceSpring*0.70;
        if (budget >= price ){
            console.log( `Yes! You have ${(budget - price).toFixed(2)} leva left.`);
        } else if (budget<price) {
             console.log( `Not enough money! You need ${(price-budget).toFixed(2)} leva.`);
        }
    }
    
} 

else if ( season == "Summer" ){

    if ( fishermans <=6 ){
        let price = priceSummerAutumn*0.90;
        if (budget >= price ){
            console.log( `Yes! You have ${(budget - price).toFixed(2)} leva left.`);
        } else if (budget<price) {
             console.log( `Not enough money! You need ${(price-budget).toFixed(2)} leva.`);
        }
    }  else if ( fishermans <=6 && (fishermans % 2) ==0){
        let price= priceSummerAutumn *0.85;
        if (budget >= price ){
            console.log( `Yes! You have ${(budget - price).toFixed(2)} leva left.`);
        } else if (budget<price) {
             console.log( `Not enough money! You need ${(price-budget).toFixed(2)} leva.`);
        }
    } else if ( 7 <= fishermans && fishermans <=11){
        let price= priceSummerAutumn * 0.85;
        if (budget >= price ){
            console.log( `Yes! You have ${(budget - price).toFixed(2)} leva left.`);
        } else if (budget<price) {
             console.log( `Not enough money! You need ${(price-budget).toFixed(2)} leva.`);
        }
    } else if ( 7 <= fishermans && fishermans <=11 &&  fishermans % 2 ==0 ){
        let price = priceSummerAutumn *0.80;
        if (budget >= price ){
            console.log( `Yes! You have ${(budget - price).toFixed(2)} leva left.`);
        } else if (budget<price) {
             console.log( `Not enough money! You need ${(price-budget).toFixed(2)} leva.`);
        }
    } else if (fishermans >=12){
        let price = priceSummerAutumn*0.75;
        if (budget >= price ){
            console.log( `Yes! You have ${(budget - price).toFixed(2)} leva left.`);
        } else if (budget<price) {
             console.log( `Not enough money! You need ${(price-budget).toFixed(2)} leva.`);
        }
    }else if (fishermans >=12  && fishermans % 2 ==0  ){
        let price = priceSummerAutumn*0.70;
        if (budget >= price ){
            console.log( `Yes! You have ${(budget - price).toFixed(2)} leva left.`);
        } else if (budget<price) {
             console.log( `Not enough money! You need ${(price-budget).toFixed(2)} leva.`);
        }
    }
}




else if ( season =="Autumn"){

    if ( fishermans <=6 ){
        let price = priceSummerAutumn*0.90;
        if (budget >= price ){
            console.log( `Yes! You have ${(budget - price).toFixed(2)} leva left.`);
        } else if (budget<price) {
             console.log( `Not enough money! You need ${(price-budget).toFixed(2)} leva.`);
        }
    }  else if ( 7 <= fishermans && fishermans <=11){
        let price= priceSummerAutumn * 0.85;
        if (budget >= price ){
            console.log( `Yes! You have ${(budget - price).toFixed(2)} leva left.`);
        } else if (budget<price) {
             console.log( `Not enough money! You need ${(price-budget).toFixed(2)} leva.`);
        }
    }  else if (fishermans >=12){
        let price = priceSummerAutumn*0.75;
        if (budget >= price ){
            console.log( `Yes! You have ${(budget - price).toFixed(2)} leva left.`);
        } else if (budget<price) {
             console.log( `Not enough money! You need ${(price-budget).toFixed(2)} leva.`);
        }
    } 
} 

else if ( season == "Winter"){

    if ( fishermans <=6 ){
        let price =priceWinter*0.90;
        if (budget >= price ){
            console.log( `Yes! You have ${(budget - price).toFixed(2)} leva left.`);
        } else if (budget<price) {
             console.log( `Not enough money! You need ${(price-budget).toFixed(2)} leva.`);
        }
    }  else if ( fishermans <=6 && (fishermans % 2) ==0){
        let price= priceWinter*0.85;
        if (budget >= price ){
            console.log( `Yes! You have ${(budget - price).toFixed(2)} leva left.`);
        } else if (budget<price) {
             console.log( `Not enough money! You need ${(price-budget).toFixed(2)} leva.`);
        }
    } else if ( 7 <= fishermans && fishermans <=11){
        let price= priceWinter*0.85;
        if (budget >= price ){
            console.log( `Yes! You have ${(budget - price).toFixed(2)} leva left.`);
        } else if (budget<price) {
             console.log( `Not enough money! You need ${(price-budget).toFixed(2)} leva.`);
        }
    } else if ( 7 <= fishermans && fishermans <=11 &&  fishermans % 2 ==0 ){
        let price= priceWinter*0.80;
        if (budget >= price ){
            console.log( `Yes! You have ${(budget - price).toFixed(2)} leva left.`);
        } else if (budget<price) {
             console.log( `Not enough money! You need ${(price-budget).toFixed(2)} leva.`);
        }
    } else if (fishermans >=12){
        let price=priceWinter*0.75;
        if (budget >= price ){
            console.log( `Yes! You have ${(budget - price).toFixed(2)} leva left.`);
        } else if (budget<price) {
             console.log( `Not enough money! You need ${(price-budget).toFixed(2)} leva.`);
        }
    } else if (fishermans >=12  && fishermans % 2 ==0  ){
        let price=priceWinter*0.70; 
        if (budget >= price ){
            console.log( `Yes! You have ${(budget - price).toFixed(2)} leva left.`);
        } else if (budget < price) {
             console.log( `Not enough money! You need ${(price-budget).toFixed(2)} leva.`);
        }
    } 
} 
 
}
solve ([ 
 3000, "Summer",11,
 ]);