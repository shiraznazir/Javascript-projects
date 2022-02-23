const gameArea = document.querySelector('.game'); 
const message = maker(gameArea,'div', 'message',"Message");
const scoreBoard = maker(gameArea,'div', 'score',"SCORE BOARD");
const gamePlay = maker(gameArea,'div', 'gamePlay',"GAME PLAY");
const box = maker(gamePlay,'div', 'box'," ");
const box1 = maker(gamePlay,'div', 'box'," ");
box1.style.backgroundColor = 'blue';
const game = {
    ani: null,
    x: 0,
    y: 0,
    speed: 5
};
const item1 = {x:100,y:100};
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
    box1.style.left = item1.x + 'px';
    box1.style.top = item1.y + 'px';
    if(checkCol(box, box1)){
        message.textContent = 'Hit!!';
        setInterval(()=>{
            message.textContent = ' '
        }, 3000);
        item1.x = Math.floor(Math.random() * (gamePlay.offsetWidth-50));
        item1.y = Math.floor(Math.random() * (gamePlay.offsetHeight-50));
    };

    game.ani = window.requestAnimationFrame(mover);
}

function checkCol(ele1, ele2){
    const a = ele1.getBoundingClientRect();
    const b = ele2.getBoundingClientRect();
    scoreBoard.innerHTML = `Red : x-${a.left} y-${a.right} <br>`;
    scoreBoard.innerHTML += `Blue : x-${a.left} y-${a.right}`;
    let hit = !((a.right < b.left) || (a.left > b.right) || (a.bottom < b.top) || (a.top > b.bottom) );
    if(hit){ 
        scoreBoard.style.backgroundColor = 'red';
    }else {
        scoreBoard.style.backgroundColor = 'black';
    }
    return hit;
};

function maker(parent, eleType, myClass, html){
    const ele = document.createElement(eleType);
    ele.classList.add(myClass);
    ele.innerHTML = html;
    parent.append(ele);
    return ele;
}