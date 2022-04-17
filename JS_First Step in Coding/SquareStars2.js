function solve(n) 
{
    let stars = '*'.repeat(n);
    let intervals = ' '.repeat(n - 2);
    console.log(stars);
    for (let i = 0; i < n - 2; i++) {
        console.log('*' + intervals + '*');
    }
    console.log(stars);
}
solve ([4]);