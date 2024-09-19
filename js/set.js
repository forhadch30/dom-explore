const sections = document.querySelectorAll('section');
for (const section of sections) {
    section.style.border = '2px solid green';
    section.style.marginBottom = '5px'
}
const bg = document.getElementById('backgroundC');
bg.classList.add('green-bg');
bg.classList.remove('large-text');

const li = document.createElement('li');
li.innerText = 'welcome to forhad ahemd';
bg.appendChild(li)

const bgs = document.getElementById('bgG');
const lis = document.createElement('li');
lis.innerText = 'Hello forhad ahmed'
bgs.appendChild(lis)


const adds = document.getElementById('impro');
const liss = document.createElement('li');
li.innerText = 'My name is forhad ahmed';
adds.appendChild(li)



