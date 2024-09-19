const mainContainer = document.getElementById('pizza-food');

const section = document.createElement('section')
const h2 = document.createElement('h2');
h2.innerText = 'My best food Lovers';
section.appendChild(h2)

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Pizza';
ul.appendChild(li1)

const li2 = document.createElement('li');
li2.innerText = 'Mojo';
ul.appendChild(li2)

const li3 = document.createElement('li');
li3.innerText = 'salad';
ul.appendChild(li3)
section.appendChild(ul)

mainContainer.appendChild(section)
