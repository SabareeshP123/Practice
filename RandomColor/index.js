let Maxval = 0xFFFFFF;
let colorChange = () =>{
    let randomColor = Math.floor(Math.random()*Maxval);
    let valtoString = randomColor.toString(16);
    let Color = valtoString;
    text = document.body.style.background =`#${Color}`;
    document.getElementById("cc").textContent = text;
} 
    