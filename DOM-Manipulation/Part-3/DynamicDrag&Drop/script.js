const g = {
    items: 0,
    size: 4,
    id: {},
    box:{}
};

let output = document.querySelector('.output');
const btn = document.querySelector('button');

btn.addEventListener('click', addDropper);

document.addEventListener('DOMContentLoaded',()=>{
    
    console.log('ready');
    output.style.gridTemplateColumns = `repeat(${g.size}), 1fr`;
    output.style.gridTemplateRows = `repeat(${g.size}, 1fr)`;
    
    let cell = 0;
    for(let x=0;x<g.size;x++){
        for(let y=0;y<g.size;y++){
            const el = createSquare();
            el.addEventListener('dragenter', dragEnter);
            el.addEventListener('dragover', dragOver);
            el.addEventListener('dragleave', dragLeave);
            el.addEventListener('drop', dragDrop);
        }
    }
    addDropper();
})

function createSquare(){
    const div = document.createElement('div');
    div.classList.add('box');
    output.appendChild(div);
    return div;
}

function addDropper(){
    g.items++;
    const div = document.createElement('div');
    const first = output.querySelector('.box');
    first.append(div);
    let ranColor = Math.floor(Math.random() * 16777215).toString(16);
    div.style.backgroundColor = '#' + ranColor;
    div.textContent = 'ID' + g.items;
    div.setAttribute('id', 'id' + g.items);
    div.classList.add('items');
    div.setAttribute('draggable', true);
    div.style.width = "80px";
    div.style.height = "80px";
    div.addEventListener('dragstart', dragStart);
}

function dragStart(e){
    g.id = e.target.id;
    console.log(g.id);
}

function dragEnter(e){
    e.preventDefault();
    g.box = e.target.closest('.box');
    e.target.classList.add('drag-over');
    console.log(g.id);
}
function dragOver(e){
    e.preventDefault();
    moveBox();
    e.target.classList.add('drag-over');
    console.log(g.id);
}

function dragLeave(e){
    console.log(g.id);
    moveBox();
    e.target.classList.remove('drag-over');
}
function dragDrop(e){
    console.log(g.id);
    e.target.classList.remove('drag-over');
    g.box = e.target.closest('.box');
    moveBox();
}
function moveBox(){
    const draggedEle = document.getElementById(g.id);
    const temp = g.box.appendChild(draggedEle);
    console.log(temp);
    return draggedEle;
}