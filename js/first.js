const allLI = document.getElementsByTagName('li');
console.log(allLI);

const appen = document.getElementsByTagName('section-title');
console.log(appen);



const mains = document.getElementById('main-container');
const section = document.createElement('section');
section.innerText = `
<h2>My Dynamic Web Site </h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sapiente fugiat perspiciatis ab ?</p>
<ul>
<li>fist blog</li/
<li>fist blog</li/
<li>fist blog</li/
<li>fist blog</li/
<li>fist blog</li/
<li>fist blog</li/
</ul>
`

mains.appendChild(section)