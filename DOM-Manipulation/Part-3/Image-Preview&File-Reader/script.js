 const preview = document.querySelector('.preview');
 const myInput = document.querySelector('#myImages');

// const popWindow = document.createElement('div');

// const popImage = document.createElement('img');

// popWindow.append(popImage);
// popWindow.style.display = 'none';
// popWindow.classList.add('popup');
// document.body.append(popWindow);
// popWindow.addEventListener('click', ()=>{
//     popWindow.style.display = 'none';
// })

 myInput.addEventListener('change',upload);

 function upload(e){
     const files = e.target.files;
     console.log(files);
//     for(let i = 0; i < files.length; i++){
//         const file = files[i];
//         const img = document.createElement('img');
//         img.classList.add('thumb');
//         img.file = file;
//         img.addEventListener('click',(ee)=>{
//             console.log(img.src);
//             popup(img.src);
//         })
//         preview.append(img);
//         const reader = new FileReader();
//         reader.onload = ((myImg)=>{
//             return (ele)=>{
//                 myImg.src = ele.target.result;
//             }
//         })(img);
//         reader.readAsDataURL(file);
//     }
 }
// function popup(img){
//     popImage.setAttribute('src', img);
//     popWindow.style.display = 'block';
// }