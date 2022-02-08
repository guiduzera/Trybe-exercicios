function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  function diasDoMes () {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const  paiLista = document.querySelector('#days');

    for (let i = 0; i < dezDaysList.length; i++) {
        const Array = dezDaysList[i];
        const criandoLi = document.createElement('li');
        
        if (Array === 24 || Array === 31) {
            criandoLi.innerHTML = Array;
            criandoLi.className = "day holiday";
            paiLista.appendChild(criandoLi);
        } else if (Array === 4 || Array === 11 || Array ===18){
            criandoLi.innerHTML = Array;
            criandoLi.className = "day friday";
            paiLista.appendChild(criandoLi);
        } else if (Array === 25) {
            criandoLi.innerHTML = Array;
            criandoLi.className = "day holiday friday";
            paiLista.appendChild(criandoLi);
        }else {
            criandoLi.innerHTML = Array;
            criandoLi.className = "day";
            paiLista.appendChild(criandoLi);
        };
    };
  };

diasDoMes();

function botaoFeriados (Feriados) {
    const selecionandoDiv = document.querySelector(".buttons-container");
    let criandoBotao = document.createElement('button');
    selecionandoDiv.appendChild(criandoBotao);
    criandoBotao.innerText = Feriados;
    criandoBotao.classList.add("btn-holiday");
};
botaoFeriados('Feriados');

document.querySelector('.btn-holiday').addEventListener('mouseover', trocandoCorFeriados);
document.querySelector('.btn-holiday').addEventListener('mouseleave', destrocandoCorFeriados);


function trocandoCorFeriados () {
   let pegandoLi = document.querySelectorAll(".holiday");
   for (let index = 0; index < pegandoLi.length; index++){
       let a = pegandoLi[index];
       a.style.color = "green";
   };
};

function destrocandoCorFeriados () {
    let pegandoLi = document.querySelectorAll(".holiday");
    for (let index = 0; index < pegandoLi.length; index++){
        let a = pegandoLi[index];
        a.style.color = "grey";
    };
};

const selecionadoDiv = document.querySelector('.buttons-container');

function botaoSextaFeira (sextaFeira) {
    const criandoSegundoBotao = document.createElement('button');
    selecionadoDiv.appendChild(criandoSegundoBotao);
    criandoSegundoBotao.innerText = sextaFeira
    criandoSegundoBotao.classList.add("btn-friday");
};

botaoSextaFeira('Sexta-Feira');

//*Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
/*É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.*/

document.querySelector('.btn-friday').addEventListener('mouseover', trocandoCorDasSextas);
document.querySelector('.btn-friday').addEventListener('mouseleave', destrocandoCorDasSextas);


function trocandoCorDasSextas () {
   let pegandoLi = document.querySelectorAll(".friday");
   for (let index = 0; index < pegandoLi.length; index++){
       let a = pegandoLi[index];
       a.innerText = "Sexta-Feira"
   };
};

function destrocandoCorDasSextas (array) {
    let pegandoLi = document.getElementsByClassName(".friday");
    for (let index = 0; index < pegandoLi.length; index++){
        const a = pegandoLi[index];
        a.innerText = array;
    };
};

/*Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.*/

function botandoZoom() {
    let days = document.querySelector('#days');
  
    days.addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '30px';
      event.target.style.fontWeight = '600';
    })
  };
  
  function tirandoOZomm() {
    let days = document.querySelector('#days');
  
    days.addEventListener('mouseout', function(event) {
      event.target.style.fontWeight = '200';
      event.target.style.fontSize = '20px';
    })
  };
  
  botandoZoom();
  tirandoOZomm();

  /*Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
  O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .*/
  const chamandoDiv = document.querySelector('.my-tasks');
function criandoSpan (string) {
    const criandoTag = document.createElement('span');
    chamandoDiv.appendChild(criandoTag);
    criandoTag.innerText = string;
}
criandoSpan('estudar');

/*Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks"*/
function legenda (cor) {
    const criandoDiv = document.createElement('div');
    criandoDiv.classList.add('task');
    criandoDiv.style.backgroundColor = cor
    chamandoDiv.appendChild(criandoDiv);
    const pegandoSpan = document.querySelector('span');
    pegandoSpan.style.color = cor;
}
legenda('green');

/*Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.*/
function setTaskClass() {
    let selectedTask = document.getElementsByClassName('task selected');
    let myTasks = document.querySelector('.task');
  
    myTasks.addEventListener('click', function(event) {
      if (selectedTask.length === 0) {
        event.target.className = 'task selected';
      } else {
        event.target.className = 'task';
      }
    });
  };
  
  setTaskClass();

/*Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .*/
function setDayColor() {
    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;
    
    days.addEventListener('click', function(event){
      let eventTargetColor = event.target.style.color;
      if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
        let color = selectedTask[0].style.backgroundColor;
        event.target.style.color = color;
      } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
        event.target.style.color = 'rgb(119,119,119)';
      }
    });
  };
  
  setDayColor();

  function addNewTask() {
    let getInputField = document.querySelector('#task-input');
    let addInputButton = document.querySelector('#btn-add');
    let getTaskList = document.querySelector('.task-list');
  
    addInputButton.addEventListener('click', function() {
      if (getInputField.value.length > 0) {
        let newLi = document.createElement('li');
        newLi.innerText = getInputField.value;
  
        getTaskList.appendChild(newLi);
        getInputField.value = '';
      } else {
        alert('Error: Digite ao menos 1 caractere.');
      }
    })
  
    getInputField.addEventListener('keyup', function(event) {
      if (event.key === 'Enter' && getInputField.value.length > 0) {
        let newLi = document.createElement('li');
        newLi.innerText = getInputField.value;
  
        getTaskList.appendChild(newLi);
        getInputField.value = '';
      }
    });
  };
  
  addNewTask();




  

