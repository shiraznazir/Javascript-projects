const btn = document.querySelector('.btn');
const output = document.querySelector('.output');

const py1 = document.querySelector('#player1');
const py2 = document.querySelector('#player2');

const dice = [
    [5],
    [1, 9],
    [1, 5, 9],
    [1 ,3, 7, 9],
    [1, 3, 5, 7, 9],
    [1, 3, 4, 6, 7, 9]
];

btn.addEventListener('click', ()=>{
   const rolls = [rollDice(6), rollDice(6)];
   let result;
   if(rolls[0] === rolls[1]){
       result = "Draw";
   } else if(rolls[0] > rolls[1]){
       result = "Player 1 Wins.";
   } else {
       result = "Player 2 Wins.";
   }
   updateDice(py1, rolls[0]);
   updateDice(py2, rolls[1]);

   output.innerHTML = `${result}`;
})

function updateDice(el, num){
    el.innerHTML = "";
    const holder = builder(num);
    el.append(holder);
}

function builder(num){
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