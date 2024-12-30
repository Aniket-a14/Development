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
            songs.push(element.href.split("/songs/")[1])
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

    let songUl = document.querySelector(".songlist").getElementsByTagName("ul")[0]
    for (const song of songs) {
        songUl.innerHTML = songUl.innerHTML + `<li> ${song.replaceAll("%20", " ")} </li>`
    }

    audio.addEventListener("loadeddata", ()=>{
        console.log(audio.duration, audio.currentSrc, audio.currentTime)
    })
}

main()