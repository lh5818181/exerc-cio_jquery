const form = document.getElementById('form-ativ')

const nomeAtividade = [];

let linhas = '';

const TabelaUl = document.querySelector('nome-ul')


form.addEventListener('submit', function(e) {
    e.preventDefault()

    novaAtv()

    AttTabela()
    CortaAtv()

})

function novaAtv() {
    const inputNomeAtv = document.getElementById('nome-atv')

    if(nomeAtividade.includes(inputNomeAtv.value)) {
        alert(`Atividade: ${inputNomeAtv.value} inclusa.`)
    } else {
        nomeAtividade.push(inputNomeAtv.value);
        
        let linha = `<li>${inputNomeAtv.value}</li>`;

        linhas += linha
    }

    inputNomeAtv.value = '';
}

function AttTabela() {
    const TableBody = document.querySelector('ul');
    TableBody.innerHTML = linhas
}

function CortaAtv(){
    const tabelaRaiz = document.querySelector('ul')

    tabelaRaiz.addEventListener('click' , function(e) {
        if(e.target.classList.contains('check')) {
            e.target.classList.remove('check');
        }else{
            e.target.classList.add('check')
        }
    });
}


