const form = document.getElementById('form-contatos');
let linhas='';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomePessoa = document.getElementById('nome-pessoa');
    const inputTefelonePessoa = document.getElementById('telefone-pessoa');
    
    let linha = '<tr>';
    linha += `<td>${inputNomePessoa.value}</td>`;
    linha += `<td>${inputTefelonePessoa.value}</td>`; 

    linhas +=linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML=linhas;

    inputNomePessoa.value ='';
    inputTefelonePessoa.value ='';
})