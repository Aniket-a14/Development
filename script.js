// for(let i=0;i<100;i++){
//     console.log(i);
// }

// let obj= {
//     "name": "Aniket",
//     "college":"lpu",
//     "batch": 2027
// }

// for(const key in obj){
//     const element= obj[key];
//     console.log(key, element);
// }

// for (const char of "object") {
//     console.log(char);
// }

// function sum(a,b,c){
//     return a+b+c;
// }

// let result = sum(12,4,7);

// console.log("your sum is:",result);

// const func1= (x)=>{
//     console.log(x*x);
// }

// func1(6);
// func1(7);
// func1(8);

// let a= [1,2,3,4,5];

// a.forEach((value, index, arr)=>{
//     console.log(value,index,arr)
//     }
// )

let obj = {
    a:1,
    b:2,
    c:3
}

for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element);
    }
}