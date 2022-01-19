const evKey = document.querySelector('.event1')
const codeKey = document.querySelector('.code1')
const whiKey = document.querySelector('.which1')

document.addEventListener('keypress', (e)=>{
    evKey.innerText = e.key;
    codeKey.innerText = e.keyCode;
    whiKey.innerText = e.key.toUpperCase();
})