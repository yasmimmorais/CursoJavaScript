var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement =  document.querySelector('#app button');

var toDos = JSON.parse(localStorage.getItem('list_toDos'))|| [];
// [
    //Poderia fazer assim se precisasse passar mais de uma propriedade para o toTo
    //{title: 'Atividade 1', description: 'descricao da att.'}
//     'Tomar um chocolate gelado',
//     'Estudar para o Enem 2020',
//     'Ler livro Sintaxe da linguagem visual'
// ];

//Ler ToDos e mostrar
function renderToDos(){
    //serve para deixar o html vazio, ou seja, para evitar repeticao de conteudo mostrado quando a funcao for chamada dentro da outra funcao de inserir toDo.  
    listElement.innerHTML = '';

    for(toDo of toDos){
        //console.log(todo);
        var toDoElement = document.createElement('li');
        var toDoText = document.createTextNode(toDo);

        //Adiciona link de excluir ToDo ao <li>
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var pos = toDos.indexOf(toDo);
        linkElement.setAttribute('onclick', 'deleteToDo('+ pos +')');

        var linkText = document.createTextNode(' Excluir');
        linkElement.appendChild(linkText);

        toDoElement.appendChild(toDoText);
        toDoElement.appendChild(linkElement);

        listElement.appendChild(toDoElement);
    }
}
renderToDos();

//Adicionar ToDo
function addToDo(){
    var toDoText = inputElement.value;

    //função push para adicionar mais um item ao array
    toDos.push(toDoText);
    inputElement.value = '';
    //chama a funcao de redenrizar para atualizar a lista
    renderToDos();
    saveToStorage();
}
buttonElement.onclick = addToDo;

//excluir toDo
function deleteToDo(pos){
    //splice: deletar elemento em tal posição (pos)
    toDos.splice(pos,1);
    renderToDos();
    saveToStorage();
}

//usar o armazenamento local(storage) para salvar os dados dos ToDos mesmo que aplicação seja fechada, atualizada.. lembrando que só serve enquanto a aplicação for local
function saveToStorage(){

    //a stringify converte os dados de array para vetor, para que possam ser salvos em formato json.
    localStorage.setItem('list_toDos', JSON.stringify(toDos));
}