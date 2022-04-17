function solve(input) {
 
    let neededMoney = Number(input.shift()); // Needed money for the trip/vacation
    let money = Number(input.shift());
    let spendDaysCount = 0;
    let dayCounter = 0;
 
    while ((spendDaysCount < 5) && (money < neededMoney)) {
 
        let jessieAction = input.shift();
        let actionAmount = Number(input.shift());
 
        if (jessieAction === "spend") {
 
            spendDaysCount++;
            let result = money - actionAmount;
 
            result >= 0 ? money = result : money = 0;
 
        } else {
            spendDaysCount = 0;
            money += actionAmount;
        }
 
        dayCounter++;
    }
 
    if (money >= neededMoney) {
        console.log(`You saved the money for ${dayCounter} days.`);
    } else {
        console.log(`You can't save the money.`);
       console.log(dayCounter);
   }

 
}
solve ([ 
    "250",
    "150",
    "spend",
    "50",
    "spend",
    "50",
    "save",
    "100",
    "save",
    "100",

 ]);