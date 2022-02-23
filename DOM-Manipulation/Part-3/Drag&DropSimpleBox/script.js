const dragMe = document.querySelector('#dragger');
const boxes = document.querySelectorAll('.box');

dragMe.addEventListener('dragstart',(e)=>{
    dragMe.style.opacity = .5;
});

dragMe.addEventListener('dragend',(e)=>{
    dragMe.style.opacity = "";
});

boxes.forEach((box)=>{
    box.addEventListener('dragenter',(e)=>{
        e.target.classList.add('red');
    })
    box.addEventListener('dragleave',(e)=>{
        e.target.classList.remove('red');
    })
    box.addEventListener('dragover',(e)=>{
        e.preventDefault(); 
    })
    box.addEventListener('drop',(e)=>{
        e.preventDefault();
        console.log('dropped');
        e.target.append(dragMe);
    })
})

