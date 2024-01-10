
const result = document.createElement("result");

let correct = true;



let letters = "0123456789ABCDEF"; 

var color = "#";

function generateColor(){
    for (let i = 0; i < 6; i++){
        color += letters[(Math.floor(Math.random() * 16))]
    }  
}

generateColor();

const button1 = document.getElementById('button1').style.background=color;
const button2 = document.getElementById('button2').style.background=color;
const button3 = document.getElementById('button3').style.background=color;

document.getElementById("button1").addEventListener('click', function(e) {
    if (e.target && e.target.matches("li")) {
        document.getElementById("button1").style.opacity = 0;
    }
});

document.getElementById("button2").addEventListener('click', function(e) {
    if (e.target && e.target.matches("li")) {
        document.getElementById("button2").style.opacity = 0;
    }
});

document.getElementById("button3").addEventListener('click', function(e) {
    if (e.target && e.target.matches("li")) {
        document.getElementById("button3").style.opacity = 0;
    }
});



ul.addEventListener('click', function(e) {
    if (e.target.tagName === 'li'){
      alert(e.target.id);
        if(correct === true){

            result.textContent = "CORRECT ANSWER! YOU WIN!"
        } else if (correct === false) {
            result.textContent = "WRONG ANSWER! TRY AGAIN!"
        }
    }
});