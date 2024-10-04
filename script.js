let timer = 60;
let score = 0;
let rn = 0;
let panelBtm = document.querySelector(".pnlbtm");

function makehit() {
  rn = Math.floor(Math.random() * 10);
  document.querySelector("#makehit").textContent = rn;
}

function makebubble() {
  let clutter = "";

  for (let i = 1; i <= 147; i++) {
    const rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  panelBtm.innerHTML = clutter;
}

function increasescore() {
  score += 10;
  document.querySelector("#scoreval").innerHTML = score;
}

function runtimer() {
  let timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#time").textContent = timer;
      console.log(timer);
    } else if (timer === 0) {
      document.querySelector(".panel").style.display = "none";
      document.querySelector(".gamebox").style.background =
        "linear-gradient(to bottom right, yellow, green, yellow)";

      panelBtm.innerHTML = `
      <div class='gameover'>
        <p>Game over</p><br>
        <div class='gameover2'>
          Your Score is ${score}
        </div><br>
      </div>`;

      const Gameover = document.querySelector(".gameover");
      Gameover.appendChild(btn);

      clearInterval(timerint);
    }
  }, 1000);
}

//logic 1
panelBtm.style.display = "none";
document.querySelector(".panel").style.display = "none";
const btnStart = document.querySelector(".btn-start");

btnStart.addEventListener("click", () => {
  runtimer();
  panelBtm.style.display = "flex";
  document.querySelector(".panel").style.display = "flex";
  document.querySelector(".inst").style.display = "none";
});

//logic 2
document.querySelector(".pnlbtm").addEventListener("click", (detail) => {
  const details = Number(detail.target.innerHTML);

  if (details === rn) {
    increasescore();
    makebubble();
    makehit();
  } else if (score > 0) {
    score = score - 5;
    document.querySelector("#scoreval").innerHTML = score;
  }
});

//button
const btn = document.createElement("button");
const text = document.createTextNode("Play Again");
const btnEl = btn.appendChild(text);

btn.classList.add("btn");

btn.addEventListener("click", () => {
  location.href = "./index.html";
});

makebubble();
makehit();
