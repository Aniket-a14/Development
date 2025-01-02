function guess_num(){
    let num= Math.floor((Math.random()*5)+1)

    let guess=0;

    while(true){
        let input= prompt("Enter a number: ")
        input= parseInt(input)
        
        if(input==num){
            console.log("Correct")
            console.log(guess)
            return;
        }else if(input>num){
            console.log("Greater")
            guess++;
        }else{
            console.log("Smaller")
            guess++;
        }
    }
}

guess_num()