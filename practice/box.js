var colors = [ 
    '#ff0000', '#00ff00', '#0000ff', 
    '#ff3333', '#ffff00', '#ff6600',
    '#ff0000', '#00ff00', '#0000ff', '#ff3333', '#ffff00', '#ff6600',
    '#00ffff', '#ff00ff', '#800000', '#008080', '#808080', '#ffa500',
    '#800080', '#add8e6', '#00bfff', '#32cd32', '#dc143c', '#ff1493',
    '#8a2be2', '#5f9ea0'   
]; 

document.querySelectorAll(".box").forEach(element => {
    element.style.backgroundColor= colors[Math.floor((Math.random()*colors.length)+1)]
});