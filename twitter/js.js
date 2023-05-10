var botaoEntrar = document.querySelector('#myBtn');
var modal = document.querySelector('#meu-modal');
var botaoFechar = document.querySelectorAll('.modal-fechar')[0];

botaoEntrar.onclick = function() {
  modal.style.display = "block";
}

botaoFechar.onclick = function() {
  modal.style.display = "none";
}

var email = document.getElementById('email');
var form = document.getElementById('form');
var messageError = document.getElementById('error');

form.addEventListener('submit', (event) => {

  let messages = [];
  if(email.value === '' || email.value === null) {
    messages.push('O campo e-mail é obrigatório');
}

if(messages.length > 0) {
  event.preventDefault();
  messageError.innerHTML = messages.join(', ');
}
})
