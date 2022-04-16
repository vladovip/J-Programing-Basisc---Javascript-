function solve(input)
{
let x1 = Number(input.shift());
let y1 = Number(input.shift());
let x2 = Number(input.shift());
let y2 = Number(input.shift());

let width = Math.max(x1, x2) - Math.min(x1, x2);
let height = Math.max(y1, y2) - Math.min(y1, y2);

console.log((width * height).toFixed(2));
console.log((2 * (width + height)).toFixed(2));
}
solve([30,40,70,-10]);