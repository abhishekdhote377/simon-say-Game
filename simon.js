

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

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userSeq =[];
    level++;
    h2.innerText = `Level ${level}`;

    // random color
    let randIdx = Math.floor(Math.random() * btns.length);
    let randomCol = btns[randIdx];
    let randomBtn = document.querySelector(`.${randomCol}`);
    gameSeq.push(randomCol);
    console.log(gameSeq);
    btnFlash(randomBtn);
};

function check (idx) {
    console.log("current level :" , level);
    if(userSeq[idx]==gameSeq[idx]) {
        if(userSeq.length==gameSeq.length) {
        setTimeout(levelUp ,1000)
        }
    } else {
        
        h2.innerText = `Game Over ! Your Score : ${level}  Press any key to start again `;
        let body = document.querySelector("body");
        body.style.background = "red";
        setTimeout(() => {
           
            body.style.background = "";
        }, 500);

        reset ();
    }
}

function btnpress () {
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userColor);

    check (userSeq.length-1);
}

let allBtn =document.querySelectorAll(".bx");
for (btn of allBtn) {
    btn.addEventListener("click",btnpress);
}

function reset () {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
