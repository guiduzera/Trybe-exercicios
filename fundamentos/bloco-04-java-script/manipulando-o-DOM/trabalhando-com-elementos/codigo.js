let corpo = document.querySelector('body');
let criandoH1 = document.createElement('h1');
let adicionandoH1 = corpo.appendChild(criandoH1);
let adicionandoTexto = document.querySelector('h1').innerText = "Exercício 5.2 - JavaScript DOM";
let addClassH1 = criandoH1.className = "title";
let criandoMain = document.createElement('main');
let adicionandoMain = corpo.appendChild(criandoMain);
let adicionandoClasseMain = document.querySelector('main').className = "main-content";
let criandoTagSection = document.createElement('section');
let adicionandoSection = criandoMain.appendChild(criandoTagSection);
let pondoClasseSection = document.querySelector('section').className = "center-content";
let trocandoCorSection = document.getElementsByClassName('center-content')[0].style.backgroundColor = "purple";
let createP = document.createElement('p');
let addP = criandoTagSection.appendChild(createP);
let adicionandoTextoP = document.querySelector('p').innerText = "OLA MUNDO";
let addSection2 = document.createElement('section');
let addSectionONMain = criandoMain.appendChild(addSection2);
let classeSection2 = document.querySelectorAll('section')[1].className = "left-content";
let addSection3 = document.createElement('section');
let addSection3ONMain = criandoMain.appendChild(addSection3);
let classeSection3 = document.querySelectorAll('section')[2].className = "right-content";
let criandoImagem = document.createElement('img');
let adicionandoBusca = criandoImagem.src = "https://picsum.photos/200";
let adicionandoImg = document.getElementsByClassName('left-content')[0].appendChild(criandoImagem);
let classeDaFoto = criandoImagem.className = "small-image";
let criandoUl = document.createElement ('ul');
let addUl = document.getElementsByClassName('right-content')[0].appendChild(criandoUl);
let array = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10];
for (let i = 0; i < array.length; i++) {
    let itens = array[i];
    let criateListItens = document.createElement('li');
    criateListItens.innerText = itens;
    
    document.getElementsByClassName('right-content')[0].appendChild(criateListItens);
}
let criandooH3 = document.createElement('h3');
let criandooH32 = document.createElement('h3');
let criandooH33 = document.createElement('h3');
let addTagH3 = criandooH3.className = "description";
let addTagH32 = criandooH32.className = "description";
let addTagH33 = criandooH33.className = "description";
adicionandoH3(criandooH3);
adicionandoH3(criandooH32);
adicionandoH3(criandooH33);

function adicionandoH3 (h3) {
    document.getElementsByClassName('main-content')[0].appendChild(h3);
}


 
