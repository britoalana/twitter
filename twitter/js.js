var modal = document.getElementById("myModal") // obtém o modal
var btn = document.getElementById("myBtn") // obtém o botão que abre o modal
var span = document.getElementsByClassName("close")[0] // obtém o elemento <span> que fecha o modal

// quando o usuário clicar no botão, abre o modal
btn.onclick = function () {
    modal.style.display = "block"
}

// quando o usuário clicar no X, feche o modal
span.onclick = function () {
    modal.style.display = "none"
}

