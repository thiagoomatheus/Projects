let tarefas = [];

let i = 0;

let btnNovaTarefa = document.querySelector("#add-tarefa button");

btnNovaTarefa.addEventListener("mouseover", function () {
    btnNovaTarefa.style.cssText = "background: rgb(35, 16, 78); color: white;";
})

btnNovaTarefa.addEventListener("mouseout", function () {
    btnNovaTarefa.style.cssText = "";
})

btnNovaTarefa.addEventListener("click", function () {

    let input = document.querySelector("#add-tarefa input");
    
    tarefas.push(input.value);

    tarefas.trim;

    if (tarefas[i] === "") {
        alert("Insira uma terefa!");
    }

    else if(tarefas[i].startsWith(" ")) {
        alert("Remova o espaço digitado no início!");
    }

    else {
        listaTarefa(tarefas);
    }

    input.value = "";

    i++;

});

function listaTarefa(tarefas) {
    let novaTarefa = document.createElement("li");

    novaTarefa.classList = "tarefas";

    novaTarefa.setAttribute("id", `item-${i}`);

    let tarefasAtuais = document.querySelector("#tarefas-atuais ul");

    tarefasAtuais.appendChild(novaTarefa);

    novaTarefa.textContent = `${tarefas[i]}`;

    criaBotoes()

};

function criaBotoes() {
    let tarefa = document.querySelector(`#item-${i}`);

    let btnConcluido = document.createElement("span");

    btnConcluido.setAttribute("id", "btnconcluido");

    btnConcluido.setAttribute("class", "material-symbols-outlined");

    btnConcluido.setAttribute("onclick", "conclui(this)");

    btnConcluido.innerHTML = `done`;

    let btnDelete = document.createElement("span");

    btnDelete.setAttribute("id", "btndelete");

    btnDelete.setAttribute("class", "material-symbols-outlined");

    btnDelete.setAttribute("onclick", "deleta(this)");

    btnDelete.innerHTML = `delete`;

    tarefa.appendChild(btnConcluido);
    tarefa.appendChild(btnDelete);

    btnConcluido.addEventListener("mouseover", function () {
        btnConcluido.style.cssText = "background: green; color: white;"
    })

    btnConcluido.addEventListener("mouseout", function () {
        btnConcluido.style.cssText = ""
    })

    btnDelete.addEventListener("mouseover", function () {
        btnDelete.style.cssText = "background: red; color: white;"
    })

    btnDelete.addEventListener("mouseout", function () {
        btnDelete.style.cssText = ""
    })
    
};

function conclui(elemento) {
    elemento.parentNode.classList.toggle("concluido")
};

function deleta(elemento) {
    elemento.parentNode.remove(true);
};