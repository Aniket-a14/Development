// 2. The Double Trouble:
//    You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.


function double(){
    let arr=[1,2,3,4,5,3]
    let dup=[]

    for(i=0;i<arr.length;i++){
        if(dup.includes(arr[i])){
            continue
        }else{
            dup.push(arr[i])
            arr[i]=arr[i]*arr[i]
        }
    }

    console.log(arr.slice(0,dup.length))
}

double()