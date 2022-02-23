const titles = document.querySelectorAll('.title');
const textDiv = document.querySelectorAll('.myText');

titles.forEach((el)=>{
    el.addEventListener('click',(e)=>{
        console.log(el.nextElementSibling);
        removeActive();
        el.nextElementSibling.classList.toggle('active');
    })
})

function removeActive(){
    const activeEles = document.querySelectorAll('.active');
    activeEles.forEach((el)=>{
        el.classList.remove('active');
    })
}