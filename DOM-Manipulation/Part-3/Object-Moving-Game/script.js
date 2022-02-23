const gameArea = document.querySelector('.game'); 
const message = maker(gameArea,'div', 'message',"Message");
const scoreBoard = maker(gameArea,'div', 'score',"SCORE BOARD");
const gamePlay = maker(gameArea,'div', 'gamePlay',"GAME PLAY");
const box = maker(gamePlay,'div', 'box'," ");
const game = {
    ani: null,
    x: 0,
    y: 0,
    speed: 5
};
const keyz = {
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
    ArrowUp: false,
};

window.addEventListener('keydown', (e)=>{
    if(e.code in keyz){
        keyz[e.code] = true;
    }
})

window.addEventListener('keyup', (e)=>{
    if(e.code in keyz){
        keyz[e.code] = false;
    }
})
game.ani = window.requestAnimationFrame(mover);

function mover(){
    if(keyz.ArrowDown){
        game.y+=game.speed;
    } else if(keyz.ArrowUp){
        game.y-=game.speed;
    }

    if(keyz.ArrowLeft){
        game.x-=game.speed;
    } else if(keyz.ArrowRight){
        game.x+=game.speed;
    }

    box.style.left = game.x + 'px';
    box.style.top = game.y + 'px';
    game.ani = window.requestAnimationFrame(mover);
}

function maker(parent, eleType, myClass, html){
    const ele = document.createElement(eleType);
    ele.classList.add(myClass);
    ele.innerHTML = html;
    parent.append(ele);
    return ele;
}