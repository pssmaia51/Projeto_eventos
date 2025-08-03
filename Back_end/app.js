// Função para exibir mensagens na área de saída
function mostrarMensagem(msg) {
  const output = document.getElementById("output");
  output.innerHTML = `<p>${msg}</p>`;
}

// Função para enviar dados de um formulário via fetch (simulação)
async function enviarFormulario(url, dados) {
  try {
    // Simulando envio, no futuro conectar com backend real
    console.log(`Enviando para ${url}`, dados);
    mostrarMensagem(`Dados enviados para ${url} com sucesso!`);
    return true;
  } catch (error) {
    mostrarMensagem(`Erro ao enviar dados: ${error}`);
    return false;
  }
}

// Evento de submissão do formulário Clientes
document.getElementById("formCliente")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const dados = {
    nome: this.nome.value,
    email: this.email.value,
    telefone: this.telefone.value,
  };
  enviarFormulario("/api/clientes", dados);
  this.reset();
});

// Evento de submissão do formulário Agendamentos
document.getElementById("formAgendamento")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const dados = {
    data: this.data.value,
    descricao: this.descricao.value,
  };
  enviarFormulario("/api/agendamentos", dados);
  this.reset();
});

// Evento de submissão do formulário Fornecedores
document.getElementById("formFornecedor")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const dados = {
    nome: this.nome.value,
    servico: this.servico.value,
  };
  enviarFormulario("/api/fornecedores", dados);
  this.reset();
});

// === Slideshow do Banner ===

// Caminho base (opcional)
const pastaImagens = "../Banner/";
const arquivos = ["casamento.png", "15anos.png", "aniversario.png", "crianca.png", "eventos.png"];
const imagens = arquivos.map(nome => pastaImagens + nome);

let indexAtual = 0;
const banner = document.getElementById("banner");

function trocarImagem() {
  if (banner) {
    banner.style.backgroundImage = `url('${imagens[indexAtual]}')`;
    indexAtual = (indexAtual + 1) % imagens.length;
  }
}

// Inicia o banner com a primeira imagem
trocarImagem();

// Troca a cada 60 segundos (60000 ms)
setInterval(trocarImagem, 60000);
