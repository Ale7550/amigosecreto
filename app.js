//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
  // Obter o valor do campo de entrada
  let nome = document.getElementById('nome').value;

  // Validar entrada
  if (nome === "") {
    alert("Por favor, insira um nome");
  } else {
    // Adicionar o nome ao array de amigos
    amigos.push(nome);

    // Limpar o campo de entrada
    document.getElementById('nome').value = "";
    function exibirAmigos() {
  // Obter o elemento que irá exibir a lista de amigos
  let listaAmigos = document.getElementById('lista-amigos');

  // Limpar a lista de amigos
  listaAmigos.innerHTML = "";

  // Exibir cada amigo na lista
  amigos.forEach(amigo => {
    let item = document.createElement('li');
    item.textContent = amigo;
    listaAmigos.appendChild(item);
  });
}
