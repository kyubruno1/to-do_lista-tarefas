const h1 = document.querySelector('h1');
const entradaDados = document.querySelector('.entrada');
const adicionar = document.querySelector('.adicionar');
const lista = document.querySelector('.lista');
const aFazer = document.querySelector('.afazer');

h1.innerHTML = h1.innerHTML.toUpperCase(); 

function carregarLista(){
    
    let salvo = localStorage.getItem('salvarLocal')

    if(salvo) {
        lista.innerHTML = salvo;
    }
}
carregarLista();


function criarLista(){
   
    //cria div para envolver a li
    let novoAfazer = document.createElement('div'); 
    novoAfazer.classList.add("afazer") 

    //cria nova lista
    let novaLista = document.createElement('li');  
    novaLista.innerText = entradaDados.value;
    novoAfazer.appendChild(novaLista); //adiciona li na div
    entradaDados.value = '';

    //cria botao de apagar
    let botaoApagar = document.createElement("button");
    botaoApagar.innerHTML = 'x';
    botaoApagar.classList.add("apagar"); 
    novoAfazer.appendChild(botaoApagar); //adiciona btn na div

    //apaga conteudo recem criado sem ter dado refresh na pagina
    botaoApagar.addEventListener('click', function(){
        lista.removeChild(novoAfazer);
        localStorage.setItem('salvarLocal', lista.innerHTML ) //salva string html no localstorage atualizando a antiga
    })
    
    lista.appendChild(novoAfazer); //adiciona div afazer na UL
    localStorage.setItem('salvarLocal', lista.innerHTML ) //cria e salva salva string html no localstorage 


}
adicionar.addEventListener('click', criarLista);


function apagarJaCarregado(){
    let apagar = document.getElementsByClassName('apagar');
    apagar = Array.from(apagar) //converte a htmlcollection em array

    for (let i = 0; i < apagar.length; i++){
        apagar[i].addEventListener('click', function(){
           apagar[i].parentNode.remove();
           localStorage.setItem('salvarLocal', lista.innerHTML ) //salva string html no localstorage atualizando a antiga
        });
    }
}
apagarJaCarregado();