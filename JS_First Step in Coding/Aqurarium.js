function solve  (input)
{
    let l = Number(input.shift());
    let w = Number(input.shift());
    let h = Number(input.shift());
    let percent = Number(input.shift());
    let water =  l*w*h*0.001;
    let totalwater = (water - ((percent*0.01)*water)); 
    console.log(totalwater.toFixed(3));

}
solve ([85,75,47,17]);