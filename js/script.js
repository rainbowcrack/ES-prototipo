
console.log('Sistema de Gestão de Eventos - Front-End');

document.querySelector('.ticket-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Compra simulada com sucesso! Verifique seu e-mail para mais detalhes.');
});

document.querySelector('.evento-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Evento registrado com sucesso!');
});

document.querySelector('.fornecedor-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Cadastro de fornecimento realizado com sucesso!');
});


