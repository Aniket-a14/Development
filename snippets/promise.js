let p1 = new Promise((resolve,reject)=>{
    let a = Math.random()

    if(a>0.5){
        reject("Number is greater");
    }else{
        resolve("Number is accepted");
    }
})

let p2 = new Promise((resolve,reject)=>{
    let a = Math.floor((Math.random()*10)+1);

    if(a>5){
        reject("Number is greater than 5");
    }else{
        resolve("Number is less than 5");
    }
})

let p3 = Promise.allSettled([p1,p2])

p3.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})