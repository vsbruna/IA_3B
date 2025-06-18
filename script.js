const caixaPrincipal = document.querySelector(".caixa-principal")
const caixaPerguntas = document.querySelector(".caixa-perguntas")
const caixaAlternativas = document.querySelector(".caixa-alternativas")
const caixaResultado = document.querySelector(".caixa-resultado")
const textoResultado = document.querySelector(".texto-resultado")
const perguntas = [
     {
        enunciado:"Como podemos desconstruir a dinâmica de poder que sustenta o bullying"
        alternativas: [
            {
                texto: " A desconstrução da dinâmica de poder do bullying começa com a educação para a empatia e o respeito às diferenças desde a infância, tanto em casa quanto na escola."
                afirmacao:
               
            }
            {
                texto: "Usar realidade virtual (RV) ou jogos educativos pode simular preconceito, desenvolvendo empatia e capacitando os alunos a intervir.",
                afirmacao: "Experiências imersivas aprimoram a compreensão e a sensibilidade social."
            },
        ]
    },
    {
        enunciado: "Qual o papel da escola em mitigar isso e promover o uso responsável entre os jovens?",
        alternativas: [
            {
                texto: "Redes sociais propagam cyberbullying. A escola deve educar sobre cidadania digital e pensamento crítico para identificar e combater esses conteúdos.",
                afirmacao: "A educação digital é crucial para navegar em ambientes online complexos."
            },
            {
                texto: "Algoritmos criam bolhas de filtro. A escola precisa ensinar a questionar informações online e buscar fontes diversas para desconstruir narrativas homofóbicas.",
                afirmacao: "Compreender algoritmos e diversidade de informação evita a polarização."
            },
        ]
    },
    {
        enunciado: "Como a escola pode integrar a tecnologia no currículo para abordar a homofobia como uma questão que exige letramento digital e engajamento cívico dos alunos?",
        alternativas: [
            {
                texto: "A escola pode desenvolver projetos que utilizem mídias digitais (vídeos, podcasts, blogs) para campanhas de conscientização, permitindo que os alunos criem conteúdo e se tornem defensores da inclusão.",
                afirmacao: "A produção de conteúdo digital pelos alunos amplifica mensagens de inclusão."
            },
            {
                texto: "Incluir aulas sobre ética digital e consequências do cyberbullying homofóbico, usando estudos de caso reais e ferramentas de análise de redes sociais.",
                afirmacao: "A análise de casos reais e o debate ético no contexto digital são fundamentais para a formação cívica."
            },
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

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