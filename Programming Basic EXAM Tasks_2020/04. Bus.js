function solve(input) {
 
    let passengers  = Number(input.shift())
    let stops = Number(input.shift())
 
    for (let i = 1; i <= stops; i ++) {   
        
        get_off = Number(input.shift())
        get_up = Number(input.shift())
      
        if (i % 2 != 0) {
            get_up += 2
        } else {
            get_off += 2
        }
        passengers  -= get_off
        passengers  += get_up
    }
    console.log(`The final number of passengers is : ${passengers}`);
}



solve ([ 
    20,
    2,
    10,
    5,
    5,
    3,
    

    

    
 ]);