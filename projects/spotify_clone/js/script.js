console.log("hello")

async function getsong(){
    let a = await fetch("http://127.0.0.1:3000/projects/spotify_clone/songs/")
    let response = await a.text();
    console.log(response)

    let div= document.createElement("div");
    div.innerHTML= response;
    console.log(div.innerHTML)
    let as= document.getElementsByTagName("a");
    let songs=[];
    console.log(as)

    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(element.href.endsWith(".mp3")){
            songs.push(element.href)
        }
    }
    console.log(songs)

    return songs;
}

async function main() {
    let songs= await getsong()
    console.log(songs)
    var audio= new Audio(songs[0]);
    audio.play();
}

main()