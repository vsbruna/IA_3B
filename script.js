const caixaPrincipal = document.querySelector(".caixa-principal")
const caixaPerguntas = document.querySelector(".caixa-perguntas")
const caixaAlternativas = document.querySelector(".caixa-alternativas")
const caixaResultado = document.querySelector(".caixa-resultado")
const textoResultado = document.querySelector(".texto-resultado")
const perguntas = [
     {
        enunciado:"Quando uma pessoa sofre bullying físico ou verbal, quais das seguintes ações podem ser eficazes para buscar ajuda?",
        alternativas: [
            {
                texto: "Conversar com um adulto de confiança",
                afirmacao:"É fundamental compartilhar a situação com pais, professores ou conselheiros, pois eles podem oferecer suporte e intervir de forma adequada."
               
            },
            {
                texto: "Documentar os incidentes",
                afirmacao: "Anotar datas, horários e detalhes do que aconteceu, além de guardar mensagens ou fotos, pode ser útil como prova caso seja necessário denunciar."
            },
        ]
    },
    {
        enunciado: "No contexto do cyberbullying, quais estratégias podem ajudar a proteger a si mesmo(a) e a combater essa prática?",
        alternativas: [
            {
                texto: "Bloquear e denunciar o agressor nas redes sociais",
                afirmacao: "Bloquear o contato indesejado impede que o agressor continue as hostilidades, e denunciá-lo à plataforma pode levar a ações contra a conta."
            },
            {
                texto: "Evitar responder às provocações e guardar as evidências",
                afirmacao: "Reagir às mensagens de cyberbullying pode alimentar a situação, enquanto guardar capturas de tela e registros pode ser crucial para uma denúncia futura."
            },
        ]
    },
    {
        enunciado: "Diante de uma situação de racismo, quais atitudes são importantes para combater a discriminação e promover a igualdade?",
        alternativas: [
            {
                texto: "Denunciar o ocorrido às autoridades competentes",
                afirmacao: "Registrar um boletim de ocorrência na polícia ou procurar órgãos de defesa dos direitos humanos é essencial para que o crime de racismo seja investigado e punido."
            },
            {
                texto: "Educar-se e dialogar sobre o tema com outras pessoas",
                afirmacao: "Buscar informações sobre a história e as manifestações do racismo, além de conversar abertamente, contribui para desconstruir preconceitos e promover a conscientização."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = ""

function mostraPergunta() {
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", ()=>respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Conclusão...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
mostraPergunta()