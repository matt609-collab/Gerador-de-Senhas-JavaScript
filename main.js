const numeroSenha = document.querySelector('parametro-senha__texto');
const botoes = document.querySelectorAll('parametro-senha__botao');

let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if (tamanhoSenha > 1) {
    tamanhoSenha --;
    }
}

function diminuiTamanho(){
    if (tamanhoSenha < 12) {
    tamanhoSenha ++;
    }
}

numeroSenha.textContent = tamanhoSenha;