
const botao = document.getElementById('save-button');
const bemVindoTexto = document.querySelector('.bem-vindo');

botao.addEventListener('click', () => {

    const nome = document.getElementById('name-input').value.trim();

    localStorage.setItem("nomeUsuario", nome);
    bemVindoTexto.textContent = "Bem vindo(a) " + nome;
});

const nomeSalvo = localStorage.getItem("nomeUsuario");

if (nomeSalvo) {
    bemVindoTexto.textContent = "Bem vindo(a) " + nomeSalvo;
}



