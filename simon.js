

let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let btns = ["yellow", "red", "purpule", "green"];
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (!started) {   
        console.log("Game started");
        started = true;
        levelUp();
    } 
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;

    // random color
    let randIdx = Math.floor(Math.random() * btns.length);
    let randomCol = btns[randIdx];
    let randomBtn = document.querySelector(`.${randomCol}`);

    console.log("Random index:", randIdx);
    console.log("Random color:", randomCol);

    btnFlash(randomBtn);
};


function pressBtn () {
    console.log("button selected!!");
}

let allBtn = document.querySelectorAll(".btn");
for (let btn of allBtn) {
    btn.addEventListener("click", pressBtn);
}