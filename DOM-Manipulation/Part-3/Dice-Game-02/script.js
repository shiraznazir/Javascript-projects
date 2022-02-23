const howMany = document.createElement('input');
const gameArea = document.querySelector('.gamearea');
howMany.setAttribute('type', 'number');
howMany.classList.add('eles');

howMany.value = 4;
const message = document.createElement('div');
gameArea.append(message);
const output = document.createElement('div');
gameArea.append(output);
output.append(howMany);
const btn1 = document.createElement('button');
btn1.textContent = "Start Game";
output.append(btn1);
btn1.addEventListener('click',startGame);
btn1.classList.add('eles');
const btn2 = document.createElement('button');
gameArea.append(btn2);
btn2.classList.add('btn');
btn2.textContent = "RollDice";
btn2.style.display = 'none';

const game = {
    players:[]
};

const dice = [
    [5],
    [1, 9],
    [1, 5, 9],
    [1, 3, 7, 9],
    [1, 3, 5, 7, 9],
    [1, 3, 4, 6, 7, 9]
];

function startGame(){
    
    console.log(howMany.value);
    output.innerHTML = "";
    btn2.style.display = 'block';

    for(let x=0; x < howMany.value; x++){
        console.log(x);
        const temp = document.createElement('div');
        temp.classList.add('viewer');
        
        const span1 = document.createElement('span');
        span1.textContent = `Player ${x+1}`;
        temp.append(span1);
        
        const span2 = document.createElement('span');
        span2.textContent = "";
        temp.append(span2);
        
        output.append(temp);
        game.players.push(span2);
    }
}

btn2.addEventListener('click', ()=>{
    const rolls = [];
    let highest = 0;
    const winners = [];
    for(let x = 0; x < game.players.length; x++){
        let val = rollDice(6);
        rolls.push(val);
        if(val > highest){
            highest = val;
        }
        updateDice(game.players[x], val);
    }
    for(let x=0; x<rolls.length; x++){
        if(rolls[x] === highest){
            winners.push(`Player ${x+1}`);
        }
    }
    let winnerList = winners.toString();
    message.innerHTML = `Highest Roll is ${highest}<br><small>Winners List ${winnerList}</small>`
});

function updateDice(el, num){
    el.innerHTML = "";
    const holder = builder(num);
    el.append(holder);
}

function builder( num ){
    const div = document.createElement('div');
    const addColor = dice[num - 1];
    console.log(addColor);
    for(let x = 1; x < 10; x++){
        const el1 = document.createElement('div');
        el1.classList.add('dot');
        if(addColor.includes(x)){
            el1.style.backgroundColor = "black";
        }
        div.append(el1);
    }
    div.classList.add('parentDice');
    return div;
}

function rollDice( num ){
    const rollValue = Math.floor(Math.random() * num) + 1;
    return rollValue;
}