const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

// Array de objetos contendo as perguntas e alternativas
const perguntas = [
     {
     enunciado: "Qual é o oceano que divide o Brasil?",
     alternativas: [
          "oceano Atlântico",
          "oceano Pacífico"
     ],
     correta: 0 // A primeira alternativa é a correta
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
     enunciado: "O que um oncologista pediátrico faz?",
     alternativas: [
          "Expecializado para cuidar da parte auditiva de uma criança",
          "Expecializado para cuidar de crianças com câncer"
     ],
     correta: 1 // A segunda alternativa é a correta
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

let atual = 0
let perguntaAtual;
let pontuação = 0;

function mostrarPergunta() {
     perguntaAtual = perguntas[atual];
     caixaPerguntas.textContent = perguntaAtual.enunciado;
     caixaAlternativas.innerHTML = "";

     perguntaAtual.alternativas.forEach((alternativas, index) => {
          const botao = documento.createElement("button");
          botao.addEventlistener("click", () => verificaResposta(index));
          caixaAlternativas.appendChild(botao);
     });

}

//FUNÇÃO VERIFICAR RESPOSTA
function verificaResposta(Seleciona) {
     if (Seleciona === perguntaAtual.correta){
          pontuacao++;
     }
     atual++;

     if(atual < perguntas.length){
          mostrarPergunta();
     } else {
          mostrarResultado();
     }

}
function mostrarResultado (){
     caixaPrincipal.stayle.display = "none";
     caixaResultado.style.display = "block";

     setTimeout(() =>caixaResultado.classList.add("mostrar"), 10);
     textoResultado.textContent = `Voce acertou ${pontuacao} de ${perguntas.length} perguntas`;
     const botaoReiniciar = document.createElement("button");
     botaoReiniciar.textContent = "Reiniciar";
     botaoReiniciar.addEventListener("click", () => {
          atual = 0;
          pontuacao= 0;
          caixaResultado.classList.remove("mostrar");
          caixaResultado.style.display = "none";
          caixaPrincipal.style.display = "block";
          mostrarPergunta();
    });

    caixaResultado.innerHTML = "";
    caixaResultado.appendChild(textoResultado);
    caixaResultado.appendChild(botaoReiniciar);

}
mostrarPergunta();



