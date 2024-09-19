function setTime() {
    document.getElementById('js-event').innerHTML = new Date().toLocaleString()
}
setTime()
setInterval(() => {
    setTime()
}, 1000);
console.log('This is event');

// Option -> One 
function bgRed() {
    document.body.style.backgroundColor = 'red'
}

// Option -> Two
const makeBlue = document.getElementById('blue');
makeBlue.onclick = blueBg;

function blueBg() {
    document.body.style.backgroundColor = 'blue'
}

// Option -> Three
const purpleMake = document.getElementById('purple');
purpleMake.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple'
}
// Option -> Four
const makePink = document.getElementById('makePink');
makePink.addEventListener('click', function name() {
    document.body.style.backgroundColor = 'pink'
})


function handlerFunction() {
    const defaultText = document.getElementById('defaultTexts');
    defaultText.innerText = 'handler by function'
}
document.getElementById('event-btn').addEventListener('click', function () {
    const eventAddevent = document.getElementById('defaultTexts');
    eventAddevent.innerText = 'Welcome to forhad Ahmed'
})




