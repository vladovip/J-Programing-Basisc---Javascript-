function solve (n)
{   
    for (let i = 1; i <= n ; i++)
    {
     let stars = "*";
     for (let j = 1; j < n ;j++)
     {
     stars += "*";
     }
    console.log(stars);
    }
    
    
}
solve ([4]);
