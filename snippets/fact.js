const fac=((a,b)=>{
    return a*b
})

let num=5;
let arr=[]

for(let i=num;i>0;i--){
    arr.push(i);
}

console.log(arr);
console.log(arr.reduce(fac));
