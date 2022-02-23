const output = document.querySelector('.output');
const message = document.createElement('div');
const gameArea = document.createElement('div');
const btn = document.createElement('button');

const game = {score:0,num:5};

output.append(message);
output.append(gameArea);
output.append(btn);

btn.classList.add('btn');
message.classList.add('message');

btn.textContent = 'Start Game';
outputMessage('Click button to start game');

btn.addEventListener('click', (e)=>{
    if(btn.textContent === 'Start Game'){
        game.guesses = 0;
        makeBoard();
        btn.textContent = 'Check Answer';
        outputMessage('Guess the combo adjust the dials');
    } else if(btn.textContent === 'Check Answer'){
        checkAnswer();
        game.guesses++;
    }
});

function checkAnswer(){
    const combos = document.querySelectorAll('.dial');
    let winners = 0;
    combos.forEach((ele)=>{
        //console.log(ele.correct);
        ele.style.color = 'white';
        if(ele.correct == ele.value){
            winners++;
            ele.style.backgroundColor = 'green';
        }else if(ele.correct > ele.value){
            ele.style.backgroundColor = 'red';
        } else if(ele.correct < ele.value){
            ele.style.backgroundColor = 'blue';
        }
    })
    if(winners === combos.length){
        gameOver();
    } else {
        outputMessage(`You got ${winners} of ${combos.length} (${game.guesses})`);
    }
}

function gameOver(){
    outputMessage(`Game Over it took ${game.guesses} guesses`);
    btn.textContent = 'Start Game';
}

function makeBoard(){
    gameArea.innerHTML = "";
    for(let x=0;x<game.num;x++){
        const ele = document.createElement('input');
        ele.setAttribute('type','number');
        ele.min = 0;
        ele.max = 9; 
        ele.correct = Math.floor(Math.random() * 10);
        ele.classList.add('dial');
        ele.value = 5;
        gameArea.append(ele);
    }
}

function outputMessage(html){
    message.innerHTML = html;
}