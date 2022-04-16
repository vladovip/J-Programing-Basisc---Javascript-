function convertor ()
{
    let Mymoney= prompt("How much money do you want to convert:");
    let leva = parseInt(Mymoney);
    let euro= leva / 1.95583;
    console.log(euro);
}
convertor();