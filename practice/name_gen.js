function concat(a,b,c){
    console.log(adj[a], shop[b], another[c]);
}

let adj= {
    1: "Crazy",
    2: "Amazing",
    3: "Fire"
}

let shop= {
    1: "Engine",
    2: "Foods",
    3: "Garments"
}

let another= {
    1: "Bros",
    2: "Limited",
    3: "Hub"
}

const ran1 = Math.floor(Math.random()*3)+1;
const ran2 = Math.floor(Math.random()*3)+1;
const ran3 = Math.floor(Math.random()*3)+1;

concat(ran1,ran2,ran3);