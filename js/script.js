const form = document.getElementById("form");
const username = document.getElementById("username");
const confirmacao = document.getElementById("confirmacao");
const select = document.getElementById("numero_criancas");


form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkForm();
    
})

username.addEventListener("blur", () => {
    checkInputUsername();
})

document.getElementById("form").addEventListener("submit", function(event) {
    // Verificar qual opção foi selecionada
    var confirmacao = document.querySelector('input[name="confirmacao"]:checked');

    // Se "Sim" foi selecionado, exibir o alerta correspondente
    if (confirmacao && confirmacao.value === "Sim") {
        alert("Ótimo! Estamos ansiosos para vê-lo no evento.");
    }
    // Se "Não" foi selecionado, exibir o alerta correspondente
    else if (confirmacao && confirmacao.value === "Não") {
        alert("Lamentamos que você não poderá participar do evento.");
    }
    // Se "Talvez" foi selecionado, exibir o alerta correspondente
    else if (confirmacao && confirmacao.value === "Talvez") {
        alert("Esperamos que você possa participar. Ficaremos felizes em vê-lo lá!");
    } else {
        // Se nenhuma opção for selecionada, exibir um alerta geral ou pode remover esta parte
        alert("Por favor, selecione sua confirmação de presença.");
        event.preventDefault(); // Impede o envio padrão do formulário
    }
});


form.addEventListener("submit", function(event) {
    event.preventDefault();  // Impede o envio padrão do formulário

    // Lógica de envio do formulário (pode ser ajax, fetch, etc.)

    form.reset();  // Limpa os campos do formulário
});



function checkForm() {
    checkInputUsername();

    const formItems = form.querySelectorAll(".form-content")

    const isValid = [...formItems].every( (item) => {
        return item.className === "form-content"
    })

}

function checkInputUsername() {
    const usernameInput = document.getElementById('username');
    const usernameValue = usernameInput.value;
    const quantidadeLetras = 5;

    if (usernameValue === "" || usernameValue.length < quantidadeLetras) {
        errorInput(usernameInput, "Preencha seu nome com pelo menos " + quantidadeLetras + " caracteres!");
        return false; // Impede o envio do formulário em caso de erro
    } else {
        const formItem = usernameInput.parentElement;
        formItem.className = "form-content";
        return true; // Permite o envio do formulário se não houver erro
    }
}

function errorInput(element, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerHTML = message;

    const existingError = element.parentElement.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    const parent = element.parentElement;
    parent.appendChild(errorDiv);
}

function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "form-content error";
}
function validarConfirmacao() {
    const opcoesConfirmacao = document.querySelectorAll('input[name="confirmacao"]');
    let selecionado = false;

    opcoesConfirmacao.forEach(opcao => {
        if (opcao.checked) {
            selecionado = true;
        }
    });

    if (!selecionado) {
        alert("Por favor, selecione uma opção para a confirmação do evento.");
    } else {
    }
}
