const button = document.querySelectorAll('.parametro-senha__botao');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox__class'); 
const forcaSenha = document.querySelector('.forca');
let numeroSenha = document.querySelector('.parametro-senha__texto');
let displayForca = document.querySelector('.senhadisplay');
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos= '!@#$%¨&*()';
let tamanhoSenha = 12;


numeroSenha.textContent = tamanhoSenha;
button[0].onclick = diminuiTamanho;
button[1].onclick = aumentaTamanho;

for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].onclick = geraSenha;
}

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

function geraSenha(){
    let alfabeto = '';
    let senha = '';
    if (checkbox[0].checked){
        alfabeto += letrasMaiusculas;
    }
    if (checkbox[1].checked){
        alfabeto += letrasMinusculas;
    }
    if (checkbox[2].checked){
        alfabeto += numeros;
    }
    if (checkbox[3].checked){
        alfabeto += simbolos;
    }
    for (let i = 0; i < tamanhoSenha; i++){
        let numeroAleatorio = Math.floor(Math.random() * alfabeto.length);
        senha += alfabeto[numeroAleatorio];
    }    
    campoSenha.value = senha;
    classificaSenha(alfabeto.length); 
}

function classificaSenha(tamanhoAlfabeto){
    let entropia = tamanhoSenha * Math.log2(tamanhoAlfabeto);
    console.log(entropia);
    forcaSenha.classList.remove('fraca', 'media', 'forte');
    if ( entropia > 57){
        forcaSenha.classList.add('forte');
        displayForca.textContent = 'Forte!';
    } else if (entropia > 35 && entropia <= 57) {
        forcaSenha.classList.add('media');
        displayForca.textContent = 'Média!';
    } else {
        forcaSenha.classList.add('fraca');
        displayForca.textContent = 'Fraca!';
    }

const valorEntropia = document.querySelector('.entropia');
valorEntropia.textContent = "Um computador levaria " + Math.floor(2** entropia / (100e6*60*60*24)) + " dias para descobrir sua senha!";
}
geraSenha();
