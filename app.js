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
    
  }
}

    function sortearAmigo() {
      // Validar se há amigos disponíveis
      if (amigos.length === 0) {
        alert("Não há amigos disponíveis para sortear");
      } else {
        // Gerar um índice aleatório
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
        // Obter o nome sorteado
        let nomeSorteado = amigos[indiceAleatorio];
    
        // Mostrar o resultado
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `O amigo sorteado é: ${nomeSorteado}`;
      }
    }