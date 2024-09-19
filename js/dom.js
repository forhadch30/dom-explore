function setTime() {
    document.getElementById('currentById').innerHTML = new Date().toLocaleString();
}
setTime();
setInterval(() => {
    setTime()
}, 1000);