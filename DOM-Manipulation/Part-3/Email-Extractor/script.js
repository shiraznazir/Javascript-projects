const rawText = document.querySelector('textarea[name="txtarea"]');
const btn = document.querySelector('button');
const output = document.querySelector('.results');
const sel = document.querySelector('select');

let holder = [];

btn.addEventListener('click',()=>{
    console.log(sel.value);
    let temp = rawText.value;
    let exp = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9._-])/gi;
    let emails = temp.match(exp);
    
    emails.forEach((email)=>{
        console.log(email);
        if(!holder.includes(email)){
            holder.push(email);
        }
    })
})
console.log(holder);

let tempHolder = holder.join(sel.value);
console.log(`Emails Found ${holder.length}`);
output.innerHTML = `Emails Found ${holder.length}`;

const div = document.createElement('div');
output.append(div);

const newResults = document.createElement('textarea');
newResults.style.width = '99%';
div.append(newResults);

newResults.value = tempHolder;

newResults.addEventListener('click',()=>{
    newResults.select();
}) 