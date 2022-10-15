function quantidade(){
    const qtd = prompt('Qual a quantidade de cadastro?');
    for(let i = 0; i < qtd; i++){ 
       adicionar()
        }    
    };
 
document.getElementById('add').addEventListener('click',quantidade);

function adicionar(){
    const nome = prompt('Digite o nome do cliente');
    const email = prompt('Digite o e-mail do cliente');
    const telefone = prompt('Digite o telefone do cliente');
    const clientes = document.getElementById('clientes');
    const tr = document.createElement('tr');
    const tdNome = document.createElement('td');
    tdNome.innerText = nome;
    const tdEmail = document.createElement('td');
    tdEmail.innerText = email;
    const tdTelefone = document.createElement('td');
    tdTelefone.innerText = telefone;

    tr.appendChild(tdNome);
    tr.appendChild(tdEmail);
    tr.appendChild(tdTelefone);
    clientes.appendChild(tr);
    tdNome.addEventListener('click',function(){
        alterar(this);
    });
    tdEmail.addEventListener('click',function(){
        alterar(this);
    });
    tdTelefone.addEventListener('click',function(){
        alterar(this);
    });
}
function alterar(elemento){
    elemento.innerText = prompt('Qual o novo texto?')
    if(elemento.innerText == ""){
        elemento.remove();//funcao usada para remover elemento
    }
}        
document.getElementsByClassName().addEventListener('click',alterar);