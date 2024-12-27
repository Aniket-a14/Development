const callback =((args)=>{
    console.log(args)
})

let func= ((src,callback)=>{
    let sc= document.createElement("script");

    sc.src=src;
    sc.onload= callback("Hi")

    document.body.append(sc)
})

func("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)