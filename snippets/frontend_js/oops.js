class Welcome{
    constructor(name){
        this.name = name
        console.log("Name is:",name)
    }

    greet(){
        console.log("Welcome to welcome class function")
    }
}

class details extends Welcome{
    constructor(name,address){
        super(name)
        console.log("Your address is",address)
    }

    code(id){
        console.log("your code is ",id)
    }

    greet(){
        super.greet()
        console.log("Welcome to details class function")
    }
}


let b= new details("Aniket","Habra")