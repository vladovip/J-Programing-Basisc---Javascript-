function solve (input){

    let nameMovie= input.shift();
    let totalTicket = 0;
    let studentCounter= 0;
    let standartCounter= 0;
    let kidsCounter= 0;

    while (nameMovie !== "Finish"){

        let freeSpace = Number(input.shift());
        let typeTicket= input.shift();
        let sellTicket = 0;
       
        while (typeTicket !== "End"){
           
            if( typeTicket=== "student"){
                studentCounter++;
            }else if( typeTicket=== "standart"){
                standartCounter++;
            }else {
               kidsCounter++; 
            }

            sellTicket++;
            totalTicket++;
            
            if( sellTicket >= freeSpace ){
                   break;
            }
             typeTicket= input.shift();
            
        }
        console.log(`${nameMovie} - ${(sellTicket / freeSpace) *100 }% full.`)
        nameMovie = input.shift();

    }

    console.log(`Total tickets: ${totalTicket}`);
    console.log(`${(studentCounter/totalTicket*100).toFixed(2)} % student tickets`);
    console.log(`${(standartCounter/totalTicket*100).toFixed(2)} % standart tickets`);
    console.log(`${(kidsCounter/totalTicket*100).toFixed(2)} % kids tickets`);
 


}
solve ([ 

 ]);