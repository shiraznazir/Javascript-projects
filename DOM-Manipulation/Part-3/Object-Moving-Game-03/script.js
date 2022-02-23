const gameArea = document.querySelector('.game'); 
const message = maker(gameArea,'div', 'message',"Message");
const scoreBoard = maker(gameArea,'div', 'score',"SCORE BOARD");
const gamePlay = maker(gameArea,'div', 'gamePlay',"GAME PLAY");
const box = maker(gamePlay,'div', 'box'," ");
const game = {
    ani: null,
    x: gamePlay.offsetWidth/2-25,
    y: gamePlay.offsetHeight/2,
    speed: 5,
    enemies: 100,
    score: 0,
};
const enemies = [];
const box1 = maker(gamePlay,'div', 'box', '  ');
box1.style.backgroundColor = 'red';
box1.pos = {x: 0,y: 0, dx: 0, dy: 0, dir: 10, speed:5};

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
    // Gen Enemies
    box1.pos.dir--;
    if(box1.pos.dir < 0){
        box1.pos.speed = ran(0,6);
        box1.pos.dx = (box1.pos.x < game.x) ? box1.pos.speed : box1.pos.speed *-1;
        box1.pos.dy = (box1.pos.y < game.y) ? box1.pos.speed : box1.pos.speed *-1;
        box1.pos.dir = ran(10, 20);
    }
    box1.pos.x+=box1.pos.dx;
    box1.pos.y+=box1.pos.dy;
    box1.style.left = box1.pos.x + 'px';
    box1.style.top = box1.pos.y + 'px';
    if(checkCol(box, box1)){
        message.textContent = 'They Got You';
        game.score--;
        scoreBoard.innerHTML = `Score : ${game.score}`;
    }
    if(enemies.length < game.enemies){
        if(ran(0, 5) == 0){
            const obj = {
                x: ran(0,gamePlay.offsetWidth-20),
                y: ran(0,gamePlay.offsetHeight-20),
                dx: 0,
                dy: 5,
                dir: 10,
                ele: maker(gamePlay, 'div', 'box1','  '),
            };
            obj.ele.style.backgroundColor = 'blue';
            enemies.push(obj);
        }
    }
    if(keyz.ArrowDown && game.y < gamePlay.offsetHeight-50){
        game.y+=game.speed;
    } else if(keyz.ArrowUp && game.y > 0){
        game.y-=game.speed;
    }

    if(keyz.ArrowLeft){
        game.x-=game.speed;
    } else if(keyz.ArrowRight){
        game.x+=game.speed;
    }

    box.style.left = game.x + 'px';
    box.style.top = game.y + 'px';

    enemies.forEach((ene)=>{
        ene.dir--;
        if(ene.dir < 0){
            ene.dir = ran(10,50);
            ene.y = ran(0,10)-5;
            ene.x = ran(0,10)-5;
        }
        if(ene.x < 50){ene.dx = 5};
        if(ene.y < 50){ene.dy = 5};
        if(ene.x < gamePlay.offsetWidth-50){ene.dx = -5};
        if(ene.y < gamePlay.offsetHeight-50){ene.dy = -5};
        
        ene.y+=ene.dy;
        ene.x+=ene.dx;
        ene.ele.style.left = ele.x + 'px';
        ene.ele.style.top = ele.y + 'px';

        if(checkCol(box, ene.ele)){
            
            message.textContent = 'Hit!!';
            ene.y = 0;
            ene.x = 0;
            game.score++;
            scoreBoard.innerHTML = `Score : ${game.score}`;
        }
    })
    // if(checkCol(box, box1)){
    //     message.textContent = 'Hit!!';
    //     setInterval(()=>{
    //         message.textContent = ' '
    //     }, 3000);
    //     item1.x = Math.floor(Math.random() * (gamePlay.offsetWidth-50));
    //     item1.y = Math.floor(Math.random() * (gamePlay.offsetHeight-50));
    // };

    game.ani = window.requestAnimationFrame(mover);
}

function ran(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}

function checkCol(ele1, ele2){
    const a = ele1.getBoundingClientRect();
    const b = ele2.getBoundingClientRect();
    // scoreBoard.innerHTML = `Red : x-${a.left} y-${a.right} <br>`;
    // scoreBoard.innerHTML += `Blue : x-${a.left} y-${a.right}`;
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