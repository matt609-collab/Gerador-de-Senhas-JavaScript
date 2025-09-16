const numeroSenha = document.querySelector('.parametro-senha__texto');
const botoes = document.querySelectorAll('.parametro-senha__botao');
const campoSenha = document.querySelector('#campo-senha');
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos= '!@#$%¨&*()';
const checkbox = document.querySelectorAll('.checkbox');
let tamanhoSenha = 12;

for (i = 0; i < checkbox.length; i++) {
        checkbox[i].onclick = geraSenha;
    }

numeroSenha.textContent = tamanhoSenha;
botoes[0].onclick = aumentaTamanho();
botoes[1].onclick = diminuiTamanho();

function diminuiTamanho(){
    if (tamanhoSenha > 1) {
        tamanhoSenha --;
        numeroSenha.textContent = tamanhoSenha;
        geraSenha();
    }
}

function aumentaTamanho(){
    if (tamanhoSenha < 20) {
        tamanhoSenha ++;
        numeroSenha.textContent = tamanhoSenha;
        geraSenha();
    }
}

numeroSenha.textContent = tamanhoSenha;

function geraSenha(){
    let alfabeto = '';
    let senha = '';
    if (checkbox[0].checked){
        alfabeto = alfabeto + letrasMaiusculas
    }
    if (checkbox[1].checked){
        alfabeto = alfabeto + letrasMinusculas
    }
    if (checkbox[2].checked){
        alfabeto = alfabeto + numeros
    }
    if (checkbox[3].checked){
        alfabeto = alfabeto + simbolos
    }
    for (let i = 0; 1 < tamanhoSenha; i++){
        let numeroAleatório = Math.random() * letrasMaiusculas.length;
        numeroAleatório = Math.floor(numeroAleatório);
        senha = senha + alfabeto[numeroAleatório];

    }
}