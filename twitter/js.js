var botaoEntrar = document.querySelector('#myBtn');
var modal = document.querySelector('#meu-modal');
var botaoFechar = document.querySelectorAll('.modal-fechar')[0];

botaoEntrar.onclick = function() {
  modal.style.display = "block";
}

botaoFechar.onclick = function() {
  modal.style.display = "none";
}



