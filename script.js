// Seleciona os elementos HTML que serão manipulados
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

// Array de objetos contendo as perguntas e alternativas
const perguntas = [
     {
          enunciado: "O que um oncologista pediátrico faz?",
          alternativas: [
               "Expecializado para cuidar da parte auditiva de uma criança",
               "Expecializado para cuidar de crianças com câncer"
          ],
          correta: 1 // A segunda alternativa é a correta
},
{
     enunciado: "A maquiagem pode se usar no corpo além do rosto?",
     alternativas: [
          "não",
          "sim"
     ],
     correta: 1 // A segunda alternativa é a correta
},
{
     enunciado: "Qual o oceano que divide o Brasil?" ,
     alternativas:[
          "Oceano Atlântico" ,
          "Oceano Pacífico"
     ],
     correta: 0 // A primeira alternativa é a correta
},
{
     enunciado: "Normalmente, quantos litros de sangue uma pessoa tem?",
     alternativas: [
          "Tem de 2 a 4 litros",
          "Tem de 4 a 6 litros"
     ],
     correta: 1 // A segunda alternativa é a correta
},
{
     enunciado: "De onde é a invenção do chuveiro elétrico?",
     alternativas: [
          "Brasil",
          "França"
     ],
     correta: 0 // A primeira alternativa é a correta
}
];

let atual = 0;
let perguntaAtual;
let pontuacao = 0;

// FUNÇÃO MOSTRAR PERGUNTAS
function mostrarPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = "";

    perguntaAtual.alternativas.forEach((alternativa, index) => {
        const botao = document.createElement("button");
        botao.textContent = alternativa; // Define o texto do botão como a alternativa
        botao.addEventListener("click", () => verificaResposta(index));
        caixaAlternativas.appendChild(botao);
    });
}

// FUNÇÃO VERIFICAR RESPOSTA
function verificaResposta(selecionada) {
    if (selecionada === perguntaAtual.correta) {
        pontuacao++;
    }
    atual++;

    if (atual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    // Esconde a caixa de perguntas
    caixaPrincipal.style.display = "none";
    // Mostra a caixa de resultado
    caixaResultado.style.display = "block";

    setTimeout(() => caixaResultado.classList.add("mostrar"), 10);
    textoResultado.textContent = `Você acertou ${pontuacao} de ${perguntas.length} perguntas!`;

    // Criar botão de reiniciar
    const botaoReiniciar = document.createElement("button");
    botaoReiniciar.textContent = "Reiniciar";

    // Adiciona um evento de click ao botão de reiniciar
    botaoReiniciar.addEventListener("click", () => {
        atual = 0;
        pontuacao = 0;
        caixaResultado.classList.remove("mostrar");
        caixaResultado.style.display = "none";
        caixaPrincipal.style.display = "block";
        mostrarPergunta();
    });

    caixaResultado.innerHTML = "";
    caixaResultado.appendChild(textoResultado);
    caixaResultado.appendChild(botaoReiniciar);
}

// Inicia o quiz
mostrarPergunta();