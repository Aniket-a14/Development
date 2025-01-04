const fs= require("fs")

fs.writeFile("./snippets/backend_js/first.txt", "Writing my first file using node", ()=>{
    console.log("done writing");
    fs.readFile("./snippets/backend_js/first.txt",(e,d)=>{
        console.log(e,d.toString());
        console.log("Done reading");
    })
})

fs.appendFile("./snippets/backend_js/first.txt", "Appending information",()=>{
    console.log("Done Appending");
})