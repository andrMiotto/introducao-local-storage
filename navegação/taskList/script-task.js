//---------------------------------- TASK LIST ----------------------------------//

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

    ativarEventos();
};

const ativarEventos = () => {
    document.querySelectorAll("li").forEach(e => {
        e.addEventListener("click", a => {

            if (a.target.classList.contains("delete")) {

                tarefas = tarefas.filter(b => b.id !== Number(e.id));

                localStorage.setItem("tarefas", JSON.stringify(tarefas));

                mostrarTarefas();
            }

            if (a.target.classList.value.includes("check")) {
                const index = tarefas.findIndex((i) => i.id === +e.id)
                ativarEventos[index].check = !ativarEventos[index].check;
            }

        });
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
