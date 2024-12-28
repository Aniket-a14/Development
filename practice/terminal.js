async function random(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(data)
        },Math.floor((Math.random()*7000)+1))
    })
}

async function additem(data){
    const div = document.createElement("div");
    div.innerHTML = data;
    document.body.append(div);

    {% comment %} const box = document.querySelector(".box");
    const div = document.createElement("div");
    div.textContent = data;
    box.appendChild(div); {% endcomment %}
}

async function main(){

    let t = setInterval(() => {
        let last = document.body.getElementsByTagName("div");
        last = last[last.length - 1]
        if(last.innerHTML.endsWith("...")){
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length-3)
        }
        else{
            last.innerHTML = last.innerHTML + "."
        }

    }, 100);


    const text= ["Initializing Hacking","Reading your files","Password files detected","Sending all personal files and passwords to server","Cleaning up"]

    for(i=0;i<text.length;i++){
        await additem(await random(text[i]))
    }

    await random()
    clearInterval(t)
}

main()



