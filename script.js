function formData() {
const form = document.querySelector('.form');

const pessoa = [];
function data(event) {
  event.preventDefault();

  const nome = form.querySelector('.nome');
  const sobrenome = form.querySelector('.sobrenome');
  const email = form.querySelector('.email');
  const telefone = form.querySelector('.tel');
  const observacao = form.querySelector('.observacao');
 
  pessoa.push({
    nome: nome.value,
    sobrenome: sobrenome.value,
    email: email.value,
    telefone: telefone.value,
    observacao: observacao.value
  });
  console.log(pessoa)
}

  form.addEventListener('submit', data);
}

formData();