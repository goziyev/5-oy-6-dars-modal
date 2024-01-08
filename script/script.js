const btn = document.getElementById('btn');
const modal = document.querySelector('.modal');
const accpect = document.getElementById('accpect')
const declined = document.getElementById('declined')
const modalHtml = document.getElementById('main_modal')
btn && btn.addEventListener("click",function(){
    modalHtml.setAttribute("class","html");
    modal.setAttribute("class","modal modal-btn")
})
function modalFunction(){
    modalHtml.setAttribute('class','html1')
    modal.setAttribute("class","modal")
} 
modalHtml && modalHtml.addEventListener("click",modalFunction)
accpect && accpect.addEventListener("click",modalFunction)
declined && declined.addEventListener("click",modalFunction)


