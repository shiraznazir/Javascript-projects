const question = document.querySelector(".question");
const contrs = document.querySelector(".controls");
const output = document.querySelector(".output");

const game = {
  data: {},
  score: 0,
  questions: 0,
  cur: 0,
};

contrs.classList.add("btn");
const url = "quiz.json";
contrs.addEventListener("click", nextQuestion);
window.addEventListener("DOMContentLoaded", () => {
  startGame();
});

function startGame() {
  game.score = 0;
  game.cur = 0;
  contrs.style.display = "block";
  contrs.textContent = "start game click here";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      game.data = data;
      game.questions = data.length;
      output.innerHTML = `Total Questions : ${game.questions}`;
    });
}

function scoreboard() {
  output.innerHTML = `Questions : ${game.cur} of ${game.questions}`;
  output.innerHTML += `<br>Score : ${game.score}`;
}

function randomArray(arr) {
  arr.sort(() => {
    return 0.5 - Math.random();
  });
}

function gameOver() {
  question.innerHTML = `<h1>Game Over</h1>`;
  question.innerHTML += `You Scored Correct ${game.score}<hr>`;
  question.innerHTML += `<div>${game.score} out of ${game.questions}</div>`;
  const btnStart = document.createElement("button");
  question.append(btnStart);
  btnStart.textContent = "Start new Game";
  btnStart.addEventListener("click", (e) => {
    btnStart.style.display = "none";
    startGame();
  });
}

function nextQuestion() {
  contrs.style.display = "none";
  if (game.data.length > 0) {
    game.cur++;
    question.innerHTML = "";
    const temp = game.data.pop();
    console.log(temp);
    const div1 = document.createElement("div");
    div1.textContent = `${temp.question}?`;
    div1.classList.add("ques");
    question.append(div1);
   
    const div = document.createElement("div");
    div.classList.add("main");
    div.ans = temp.ans;
    temp.opts.push(temp.ans);
    const opts = temp.opts;
    console.log(opts);
    randomArray(opts);
    
    opts.forEach((sel) => {
      let span = document.createElement("span");
      span.classList.add("opt");
      span.textContent = sel;
      div.append(span);
      span.addEventListener("click", checker);
    });
    question.append(div);
  } else {
    console.log("game over");
    gameOver();
  }
  scoreboard();
}

function checker(e) {
  let sel = e.target;
  let div = sel.closest(".main");
  const eles = document.querySelectorAll(".opt");
  eles.forEach((el) => {
    el.classList.add("inactive");
    el.removeEventListener("click", checker);
    if (el.textContent === div.ans) {
      el.classList.add("correct");
    }
  });
  const div2 = document.createElement("div");
  div2.classList.add("message");
  div.append(div2);

  if (sel.textContent === div.ans){
      game.score++;
      div2.innerHTML = 'Correct';
      div.style.color = 'green';
    }else{
        div2.innerHTML = 'Wrong';
        div2.style.color = 'red';
    }
    contrs.style.display = 'block';
    contrs.textContent = 'NextQuestion';
}
