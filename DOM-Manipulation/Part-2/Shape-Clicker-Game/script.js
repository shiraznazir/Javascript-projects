const output = document.querySelector('.output');
const message = document.createElement('div');
message.classList.add('message');
document.body.prepend(message);
message.textContent = "Start the Game";
const game = {timer:0, start:null};
const box = document.createElement('div');
box.classList.add('box');
box.textContent = 'Click to Start a Game';
output.append(box);

box.addEventListener('click',(e)=>{
    box.textContent = "";
    box.style.display = "none";
    game.timer = setTimeout(addBox, ranNum(3000));
    if(!game.start){
        message.textContent = "Watch for the element and click it";
    } else {
        const cur = new Date().getTime();
        const dur = (cur - game.start)/1000;
        message.textContent = `It took ${dur} seconds to click`;

    }
})

function addBox(){
    game.start = new Date().getTime();
    const container = output.getBoundingClientRect();
    console.log(container);
    const dim = [ranNum(50)+ 20, ranNum(50)+ 20];
    box.style.display = "block";
    box.style.width = dim[0] + 'px';
    box.style.height = dim[1] + 'px';
    box.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    box.style.left = ranNum(container.width - dim[0]) + 'px';
    box.style.top = ranNum(container.height - dim[1]) + 'px';
    box.style.borderRadius = ranNum(50) + '%';
    //box.style.left = ranNum();
}

function ranNum( max ){
    return Math.floor(Math.random() * max);
}