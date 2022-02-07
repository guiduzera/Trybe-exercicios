const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
firstLi.addEventListener('click',addClassNameTech);
secondLi.addEventListener('click',addClassNameTech);
thirdLi.addEventListener('click',addClassNameTech);

function addClassNameTech (event) {
    const elementoTech = document.querySelector('.tech');
    elementoTech.classList.remove('tech');
    event.target.classList.add('tech');
    input.value('');
}

input.addEventListener('input', adicionandoTexto);

function adicionandoTexto (event) {
    const techElement = document.querySelector('.tech');
    techElement.innerText = event.target.value;
  };

myWebpage .addEventListener('dblclick', redirecionando);

function redirecionando () {
    window.location.replace('https://guiduzera.github.io/');
};

myWebpage.addEventListener('mouseover', trocandoCor);
myWebpage.addEventListener('mouseleave', voltandoCor);

function trocandoCor () {
    myWebpage.style.color = 'green';
}
function voltandoCor () {
    myWebpage.style.color = "white";
}





