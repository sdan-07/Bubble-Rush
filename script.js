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
  let gameBox = document.querySelector(".gamebox");
  let timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#time").textContent = timer;
      console.log(timer);
    } else if (timer === 0) {
      document.querySelector(".panel").style.display = "none";
      gameBox.classList.add("gradient-bg");
      panelBtm.classList.replace("h-[30rem]", "h-[36rem]");
      panelBtm.classList.replace("sm:h-[31rem]", "sm:h-[35rem]");
      // panelBtm.classList.remove("backdrop-blur-xl");
      panelBtm.classList.add("p-16", "sm:p-4");

      panelBtm.innerHTML = `
      <div class='gameover text-black text-center flex flex-col gap-3 '>
        <p class='text-4xl sm:text-5xl md:text-6xl font-medium'>Game over</p><br>
        <div class='gameover2 text-2xl md:text-3xl'>
          Your Score is <span class='font-medium'>${score}</span>
        </div><br>
        <button class="btn btn-play text-base md:text-xl border-2 duration-300 ease-in-out text-white py-3 mx-8 md:mx-16 rounded-xl mt-8 md:mt-12" onclick="location.href='./index.html'">Play Again</button>
      </div>`;

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

makebubble();
makehit();