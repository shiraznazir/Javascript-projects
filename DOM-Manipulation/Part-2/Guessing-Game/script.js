const output = document.querySelector(".output");

const main = maker("div", output, "main", "Press Button to Start");
const guess = maker("input", output, "guess", "");
const btn = maker("button", output, "btn", "Start Game");

const game = {
  hiddenNum: 0,
  inplay: false,
  max: 10,
  score: 0,
};
guess.setAttribute("type", "number");
guess.style.display = "none";
guess.min = 0;

btn.addEventListener('click',(e)=>{
    if(!game.inplay){
        game.num = genNumber(game.max);
        game.inplay = true;
        game.score = 0;
        btn.textContent = "Guess Value";
        guess.style.display = 'block';
        message(`Guess the number from 0 - ${game.max}`,'black')
    } else {
        game.score++;
        let val = Number(guess.value);
        if(val === game.num){
            message(`Your Guess ${game.num} is correct! <br> Total Guesses : (${game.score})`,'green');
            endGame();
        } else if(val > game.num){
            message(`${val} was too high`,'red');
        } else if(val < game.num){
            message(`${val} was too low`,'blue');
        }
    }
});

function endGame(){
    btn.textContent = "Restart Game";
    game.inplay = false;
    guess.style.display = 'none';
    guess.value = "";
   // game.max = genNumber(max);
   // console.log("game.max",game.max);
}

function message(html, txColor){
    main.innerHTML = html;
    main.style.backgroundColor = txColor;
}

function genNumber(max){
    return Math.floor(Math.random() * max + 1);
}


 
function maker(eleType, elParent, eleClass, html) {
  const ele = document.createElement(eleType);
  ele.classList.add(eleClass);
  ele.innerHTML = html;
  elParent.append(ele);
  return ele;
}
