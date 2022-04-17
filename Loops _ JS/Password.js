function solve (input){

    let userName = input.shift();
    let password = input.shift();

    let incomingPasswords = input.shift();

    while( incomingPasswords !== password){
           incomingPasswords= input.shift();
    }
    console.log(`Welcome ${userName}!`);
    
 
}
solve ([ 'Gosho', 'secret', 'secret', ]);