
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





//----------------------------------taskList----------------------------------//


const form = document.querySelector("form");
const containerTask = document.getElementById("tarefas");

let tarefas = localStorage.getItem("tarefas")
    ? JSON.parse(localStorage.getItem("tarefas"))
    : [];

const mostrarTarefas = () => {
    containerTask.innerHTML = "";

    tarefas.forEach(e => {
        containerTask.innerHTML += `
            <li id="${e.id}">
                <input type="checkbox" class="check" ${e.check ? "checked" : ""} />
                <span>${e.nome}</span>
                <span class="material-symbols-outlined delete">delete</span>
            </li>
        `;
    });
};
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valor = e.target[0].value.trim();

    if (valor.length > 0) {
        tarefas.push({
            nome: valor,
            id: Math.random(),
            check: false
        });

        localStorage.setItem("tarefas", JSON.stringify(tarefas));

        mostrarTarefas();

        e.target[0].value = "";
    }
});

mostrarTarefas(); 