import fs from "fs/promises"
import fsn from 'fs'
import path from "path"

let bp="C:\\Development\\snippets\\backend_js";

let files = await fs.readdir(bp)

console.log(files)

for (const file of files) {
    let e= file.split(".")[file.split(".").length-1]
    if(fsn.existsSync(path.join(bp,e)) && e!="js" && e!="json"){
        fs.rename(path.join(bp,file), path.join(bp,e,file))
    }else{
        fs.mkdir(path.join(bp,e))
        fs.rename(path.join(bp,file), path.join(bp,e,file))
    }
}