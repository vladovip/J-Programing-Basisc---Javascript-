function solve(input)
{
    let squaremter = Number(input.shift());
    let pricepermeter= 7.61;
    let discount = 0.18;
    let disountprice= (0.18*(squaremter*pricepermeter)).toFixed(2);
    let finalprice= ((squaremter*pricepermeter)-disountprice).toFixed(2);
    console.log(`The final price is: ${finalprice} lv.`);
    console.log(`The discount is: ${disountprice} lv.`)
}
solve([540])