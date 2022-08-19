const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
const para = document.createElement('p');

// Add your code here
function chooseName() {
    let index = Math.floor(Math.random()*names.length);
    let choice = names[index]; 
    para.textContent = choice;
}

chooseName();

// Don't edit the code below here!

section.innerHTML = ' ';

section.appendChild(para);