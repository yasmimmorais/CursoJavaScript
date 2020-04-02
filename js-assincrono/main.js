//O QUE É O AJAX

//requisição AJAX, forma de requisitar informações do servidor sem precisar atualizar a página

/*var xhr = new XMLHttpRequest();*/

//se quero buscar uma informação o método a ser utilizado é o GET
/*xhr.open('GET', 'https://api.github.com/users/yasmimmorais');
xhr.send(null);

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 ){
        console.log(JSON.parse(xhr.responseText));
    }
}*/
//----------------------------------------------------------------------------------------------

//PROMISES
//funções que devolvem um resultado após algum tempo 
/*var myPromise = function(){*/
    //resolve: função quando o resultado tem sucesso
    //reject: função q recebe quando o resultadod não tem suceso
    /*return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/yasmimmorais');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 ){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                } else{
                    reject('Erro na requisição.');
                }
            }
        }
    });
}
myPromise()
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    });*/

//UTILIZANDO O AXIOS PARA CHAMAR O HTTP REQUEST. SERVE PARA AJUDAR A RETORNAR OS VALORES MAIS FACILMENTE
//MÉTODO MAIS FÁCIL DO QUE OS ANTERIORES QUE SAO NATIVOS DO JS
axios.get('https://api.github.com/users/yasmimmorais')
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    });

