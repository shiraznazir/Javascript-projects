const container = document.querySelector('.output');
const scoreBoard = maker(container, 'div','scoreBoard', 'SCORE');

const gameBoard = maker(container, 'div', 'gameBoard', 'GAMEBOARD');

const message = maker(container, 'div', 'message', 'MESSAGE');
const items = ["&#8509;","&#9730;","&#9731;","&#9728;","&#9732;","&#9733;","&#9743;","&#9762;"];
const game = {
    score: 0,
    ani: {},
    total: 10,
    counter: 0,
    ready: 0,
    bad: 0
};

const btn = maker(message, 'button', 'btn', 'CLick to Start the Game');
btn.addEventListener('click', startGame);

function startGame() {
    btn.style.display = 'none';
    game.score = 0;
    game.total = 50;
    game.ready = 0;
    game.counter = 0;
    game.bad = 10;
    gameBoard.innerHTML = "";
    message.innerHTML = "Click the Bubbles : ";
    scoreUpdator();
    game.ani = requestAnimationFrame(mover);
}
function badBubbles(){
    const bubble = maker(container, 'div', 'baddy',"&#9760;");
    const cSize = gameBoard.getBoundingClientRect();
    gameBoard.append(bubble);
    bubble.speed = ran(2,10);
    bubble.style.backgroundColor = 'red';
    bubble.style.transform = `scale(${ran(0.5,3)})`;
    bubble.style.left = ran(0,(cSize.width-30))+ 'px';
    bubble.style.top = ran(0,500) + 500 + 'px';
    bubble.addEventListener('mouseover', (e)=>{
        game.score--;
        gameBoard.style.backgroundColor = 'red';
    })
    bubble.addEventListener('mouseout',(e)=>{
        game.score--;
        gameBoard.style.backgroundColor = '';
    })
}

function genBubbles(){
    scoreUpdator();
    items.sort(()=> Math.random() - .5);
    const letter = items[0];
        const bubble = maker(container, 'div', 'bubble', letter);
        const cSize = gameBoard.getBoundingClientRect();
        gameBoard.append(bubble);
        bubble.speed = ran(2, 10);
        bubble.dir = ran(0, 10);
        bubble.dir = ran(0,10) - 5;
        bubble.style.BackgroundColor = `rgba(${ran(0,255)},${ran(0,255)},${ran(0,255)}, 0.5)`;
        bubble.style.transform = `scale (${ran(0.5,3)})`;
        bubble.style.left = ran(0,(cSize.width-30) + 'px');
        bubble.style.top = ran(0,500) + 500 + 'px';
        bubble.addEventListener('mouseover',(e)=>{
            game.score+=10;
            game.counter++;
            scoreUpdator();
            bubble.remove();
            if((game.ready-game.counter)===0){
                message.innerHTML = 'Game Over';
                cancelAnimationFrame(game.ani);
                btn.style.display = 'block';
            }
        })
}

function mover(){
    if(game.bad > 0){
        badBubbles();
        game.bad--;
    }
    if(game.ready < game.total){
        console.log(game);
        game.ready++;
        genBubbles();
    }
    const allBaddy = document.querySelectorAll('.bubble');
    allBaddy.forEach((bubble)=>{
        const pos = [bubble.offSetLeft, bubble.offSetTop]
        const speed = bubble.speed;
        pos[1] -= speed;
        if(pos[1] < -100){
            bubble.remove();
            badBubbles();
        }
        bubble.style.top = pos[1] + 'px';
        bubble.style.left = pos[0] + 'px';
    })
    const allBubbles = document.querySelectorAll('.bubble');
    allBubbles.forEach((bubble)=>{
        const pos = [bubble.offSetLeft, bubble.offSetTop]
        const speed = bubble.speed;
        pos[1] -= speed;
        if(pos[1] < -100){
            bubble.remove();
            game.score--;
            genBubbles();
            scoreUpdator();
        }
        bubble.style.top = pos[1] + 'px';
        bubble.style.left = pos[0] + 'px';
    })
    game.ani = requestAnimationFrame(mover);
}

function scoreUpdator(){
    scoreBoard.innerHTML = `Your Score : ${game.score}`;
    message.innerHTML = `Bubbles Left : ${game.ready-game.counter}`;
}

function ran(min, max){
    return Math.floor(Math.random() * (max - min) + min);
} 

function maker(parent, eleType, myClass, html){
    const ele = document.createElement(eleType);
    ele.classList.add(myClass);
    ele.innerHTML = html;
    parent.append(ele);
    return ele;
}