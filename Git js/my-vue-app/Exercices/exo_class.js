const add = document.querySelector(".add");
const suppr = document.querySelector(".suppr");
const toggle = document.querySelector(".toggle");
const title = document.querySelector("h1");

add.addEventListener("click", function(){
    if(!title.classList.contains('charteuse'))
        title.classList.add('chartreuse');
});

suppr.addEventListener("click", function(){
    if(title.classList.contains('chartreuse'))
        title.classList.remove('chartreuse');
});

toggle.addEventListener("click", function(){
    title.classList.toggle('chartreuse');
});