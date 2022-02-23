const main = document.querySelector('.main');
const game = {
    score: 0,
    streak: 0
};

const message = createElements(main,'div','message');
message.textContent = "Press Button to Start Game";

const btn = createElements(main, 'button', 'btn');
const btn1 = createElements(main, 'button', 'btn');
const output = createElements(main,'div','otpt');
const scoring = createElements(main,'div','score');


function createElements(parent, eleType, myClass){
    const ele = document.createElement(eleType);
    parent.append(ele);
    ele.classList.add(myClass);
    return ele;
}

const coin = createElements(output,'div','coin');
const sideA = createElements(coin,'div','side');
const sideB = createElements(coin,'div','side');


sideA.innerHTML = "&#9786";
sideB.innerHTML = "&#9785";

btn.textContent = "Start game";
btn.addEventListener('click', playGame);
coin.style.display = "none";

btn1.textContent = "Heads";
btn1.addEventListener('click', playGame);
btn1.style.display = "none";

btn.style.backgroundColor = 'red';
btn.style.backgroundColor = 'blue';

function playGame(e){
    console.log(e.target.textContent);
    const el = e.target;
    if(el.textContent === 'start game'){
        game.score = 0;
        game.streak = 0;
        message.textContent = "Select either Heads or Tails";
        btn.textContent = "Heads";
        btn1.textContent = "Tails";
        btn1.style.display = "block";
        coin.style.display = "block";
        addScore();
    } else if(el.textContent === 'Heads'){
       // console.log('flip coin');
       coinFlipper('Heads');
    } else if(el.textContent === 'Tails'){
        // console.log('flip coin');
        coinFlipper('Tails');
     }
   // btn.style.display="none";
}

function coinFlipper(val){
    const ranValue = Math.floor(Math.random() * 2);
    let result = "";
    if(ranValue === 1){
        sideA.style.display = "block";
        sideB.style.display = "none";
        result = "Heads";
    } else {
        sideB.style.display = "block";
        sideA.style.display = "none";
        result = "Tails";
    }
    // add scoring
    if(result === val){
        game.score++;
        game.streak--;
        message.textContent = `You Picked ${val} Correct it was ${result}`
    } else {
        game.streak = 0;
        game.score--;
        message.textContent = `You Picked ${val} Wrong!!! was ${result}`
    }
}

function addScore(){
    scoring.innerHTML = `Score : ${game.score} Streak : ${game.streak}`
}