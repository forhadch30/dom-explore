// function setTime() {
//     document.getElementById('delegate').innerText = new Date().toLocaleString()
// }
// setTime();
// setInterval(() => {
//     setTime();
// }, 1000);



const counts = document.getElementById('span');
const div = document.getElementById('counter')

const ups = document.getElementById('up')[0]
const down = document.getElementById('down')[0]

div.addEventListener('click', function () {
    console.log('counter');
})
ups.addEventListener('click', function (event) {
    let currentValue = Number(counts.innerText);
    currentValue++;
    counts.innerText = currentValue;
    event.stopPropagation()
})
down.addEventListener('click', function (event) {
    let currentValue = Number(counts.innerText);
    currentValue--;
    counts.innerText = currentValue;
    event.stopPropagation()
})


// const count = document.getElementById('span');
// console.log(count.innerText);

// function incriments() {
//     let currentValue = Number(count.innerText);
//     currentValue++;
//     count.innerText = currentValue;
// }
// function dicriment() {
//     let currentValue = Number(count.innerText);
//     currentValue--;
//     count.innerText = currentValue;
// }