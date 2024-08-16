const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPrincipal = document.querySelector(".caixa-pergunta");
const caixaPrincipal = document.querySelector(".caixa-alternativas");
const caixaPrincipal = document.querySelector(".caixa-resultado");
const caixaPrincipal = document.querySelector(".texto-resultado");

// Array de objetos contendo as perguntas e alternativas
const perguntas = [
     {
          enunciado: "Qual é o oceano que divide o Brasil?"
     alternativas: [
               "oceano Atlântico",
               "oceano Pacífico"
          ],
          correta: 0 // A primeira alternativa é a correta
     },
     {
          enunciado: "A maquiagem pode se usar no corpo além do rosto?"
     alternativas: [
               "não",
               "sim"
          ],
          correta: 1 // A segunda alternativa é a correta
     }

       {
          enunciado: "O que um oncologista pediátrico faz?"
     alternativas: [
               "Expecializado para cuidar da parte auditiva de uma criança",
               "Expecializado para cuidar de crianças com câncer"
          ],
          correta: 1 // A segunda alternativa é a correta
     }
        {
          enunciado: "Normalmente, quantos litros de sangue uma pessoa tem?"
     alternativas: [
               "Tem de 2 a 4 litros",
               "Tem de 4 a 6 litros"
          ],
          correta: 1 // A segunda alternativa é a correta
     }
         {
          enunciado: "De onde é a invenção do chuveiro elétrico?"
     alternativas: [
               "Brasil",
               "França"
          ],
          correta: 0 // A primeira alternativa é a correta
     }
]


