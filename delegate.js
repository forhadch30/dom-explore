function setTime() {
    document.getElementById('delegate').innerText = new Date().toLocaleString()
}
setTime();
setInterval(() => {
    setTime();
}, 1000);



document.getElementById('span').addEventListener('click',function(){
    
})