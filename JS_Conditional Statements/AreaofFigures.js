function solve (input)
{
    let type = input.shift();
    

    if ( type === "square") {
         let sideA = Number(input.shift());
        console.log((sideA*sideA).toFixed(3));
    } else if (type === "rectangle"){
        let sideA=  Number(input.shift());
        let sideB=  Number(input.shift());
        let Area= sideA*sideB;
        console.log ((Area).toFixed(3))

    } else if(type === "triangle"){
        let sideA=  Number(input.shift());
        let sideB=  Number(input.shift());
        let Area= (sideA*sideB)/2;
        console.log(Area.toFixed(3));
    } else if(type === "circle"){
       let rad = Number(input.shift());
       let Area = Math.PI*rad*rad;
       console.log (Area.toFixed(3));
    }



}
solve ([ "square", 5

 ]);