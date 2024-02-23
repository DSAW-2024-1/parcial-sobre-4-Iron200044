let buttonPrincipal=document.getElementById("buttonPrincipal");

let subsNews=document.querySelector('.subsNews');
let succes=document.querySelector('.succes');

buttonPrincipal.addEventListener('click', function(){
    subsNews.style.display='none';
    succes.style.display='block';
})
