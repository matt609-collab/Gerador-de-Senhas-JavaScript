const button = document.querySelectorAll('.parametro-senha__botao');
const campoSenha = document.querySelector('.campo-senha');
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos= '!@#$%¨&*()';
const checkbox = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('.forca');
let tamanhoSenha = 12;
let numeroSenha = document.querySelector('.parametro-senha__texto');

numeroSenha.textContent = tamanhoSenha;
button[0].onclick = diminuiTamanho;
button[1].onclick = aumentaTamanho;


for (i = 0; i < checkbox.length; i++) {
    checkbox[i].onclick = geraSenha;
}


function diminuiTamanho(){
    if (tamanhoSenha > 1) {
        tamanhoSenha --;
        numeroSenha.textContent = tamanhoSenha;
        geraSenha;
    }
}

function aumentaTamanho(){
    if (tamanhoSenha < 20) {
        tamanhoSenha ++;
        numeroSenha.textContent = tamanhoSenha;
        geraSenha;
    }
}

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
    for (let i = 0; i < tamanhoSenha; i++){
        let numeroAleatório = Math.random() * alfabeto.length;
        numeroAleatório = Math.floor(numeroAleatório);
        senha = senha + alfabeto[numeroAleatório];
    }    
    campoSenha.value = senha;
    classificaSenha();
}

function classificaSenha(){
    forcaSenha.classList.remove('fraca', 'media', 'forte');
    if ( tamanhoSenha > 11){
        forcaSenha.classList.add('forte');
    } else if (tamanhoSenha > 5 && tamanhoSenha < 11){
        forcaSenha.classList.add('media');
    } else{
        forcaSenha.classList.add('fraca');
    }
}