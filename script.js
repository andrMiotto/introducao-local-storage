document.addEventListener('DOMContentLoaded', () => {

    const botao = document.getElementById('save-button');
    const nameInput = document.getElementById('name-input');
    const storageKey = 'userName';
    const nomeDigitado = nameInput.value;

    const nomeSalvo = localStorage.get(nomeDigitado);

    const bemVindo = document.querySelector('bem-vindo');

    botao.addEventListener('click', () => {


        if (nomeSalvo == "") {

        } else {
            localStorage.setItem(storageKey, nomeDigitado);
            console.log("Olá:", nomeDigitado);

        }
    });
    
});

