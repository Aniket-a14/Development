console.log("welcome to faulty calculator");

function right(a,b, operator){
    if(operator == "+"){
        return a+b
    }else if(operator == "-"){
        return a-b;
    }else if(operator == "*"){
        return a*b;
    }else if(operator == "/"){
        return a/b;
    }else{
        return null;
    }
}

function wrong(a,b, operator){
    if(operator == "+"){
        return a-b
    }else if(operator == "-"){
        return a/b;
    }else if(operator == "*"){
        return a+b;
    }else if(operator == "/"){
        return a**b;
    }else{
        return null;
    }
}

if(Math.random() < 0.1){
    console.log("your value is: ", wrong(4,7,"+"))
}else{
    console.log("your value is: ", right(7,3,"+"));
}