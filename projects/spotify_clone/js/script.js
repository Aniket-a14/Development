async function getsong() {
    // Simulated response
    let a = await fetch("http://127.0.0.1:3000/projects/spotify_clone/songs/");
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response; 

    let as = div.getElementsByTagName('a'); 
    let songs = [];
    for (let element of as) {
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href);
        }
    }
    return songs;  
}

async function main() {
    let songs= await getsong();
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