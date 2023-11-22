var listaDeTimes = [];
var elementoTabela = document.getElementById("tabelaTimes");

function exibirNaTela() {
  elementoTabela.innerHTML = "";
  listaDeTimes.forEach((time, index) => {
    elementoTabela.innerHTML += `
        <tr>
            <td><img src="${time.escudo}" alt="Escudo do Time"></td>
            <td>${time.nome}</td>
            <td>${time.vitoria}</td>
            <td>${time.empate}</td>
            <td>${time.derrota}</td>
            <td>${time.pontos}</td>
            <td><button onClick="adicionarVitoria(${index})">Vitória</button></td>
            <td><button onClick="adicionarEmpate(${index})">Empate</button></td>
            <td><button onClick="adicionarDerrota(${index})">Derrota</button></td>
            <td><button onClick="limparPontuacaoTime(${index})">Limpar</button></td>
            <td><button onClick="removerTime(${index})">Remover</button></td>
          </tr>
    `;
  });
}

function criarTime() {
  // Obtenha os valores dos campos
  var nomeNovoTime = document.getElementById("campoNomeTime").value;
  var escudoNovoTime = document.getElementById("campoEscudoTime").value;
  listaDeTimes.push({
    nome: nomeNovoTime,
    escudo: escudoNovoTime,
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  });
  //limpar os campos de entrada
  document.getElementById("campoNomeTime").value = "";
  document.getElementById("campoEscudoTime").value = "";
  exibirNaTela();
}

function adicionarVitoria(index) {
  listaDeTimes[index].vitoria++;
  listaDeTimes[index].pontos = listaDeTimes[index].pontos + 3;
  exibirNaTela();
}

function adicionarEmpate(index) {
  listaDeTimes[index].empate++;
  listaDeTimes[index].pontos++;
  exibirNaTela();
}

function adicionarDerrota(index) {
  listaDeTimes[index].derrota++;
  exibirNaTela();
}

function limparPontuacaoTime(index) {
  listaDeTimes[index].vitoria = 0;
  listaDeTimes[index].empate = 0;
  listaDeTimes[index].derrota = 0;
  listaDeTimes[index].pontos = 0;
  exibirNaTela();
}

function removerTime(index) {
  listaDeTimes.splice(index, 1);
  exibirNaTela();
}

function ApagaTimes() {
  listaDeTimes = [];
  exibirNaTela();
}
